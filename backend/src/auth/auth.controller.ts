import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Response,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/user.dto';
import { LocalAuthGuard } from '@guards/local-auth.guard';
import { Response as ResponseExpress } from 'express';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async signIn(
    @Body('email') email: string,
    @Body('password') password: string,
    @Response() res: ResponseExpress,
  ) {
    const userInfo = await this.authService.signIn(email, password);
    res.setHeader('jwt-token', userInfo.jwt);

    return res.json(userInfo.user);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/sign-up')
  async signUp(
    @Body() signUpDto: CreateUserDto,
    @Response() res: ResponseExpress,
  ) {
    const userinfo = await this.authService.signUp(signUpDto);
    res.setHeader('jwt-token', userinfo.jwt);

    return res.json(userinfo.user);
  }
}
