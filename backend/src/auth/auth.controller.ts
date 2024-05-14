import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request,
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
  async signIn(@Request() req, @Response() res: ResponseExpress) {
    const userInfo = await this.authService.createJwtToken(req.user);
    res.setHeader('jwt-token', userInfo.jwt);

    return res.json({ status: 'OK' });
  }

  @HttpCode(HttpStatus.OK)
  @Post('/sign-up')
  signUp(@Body() signUpDto: CreateUserDto) {
    return this.authService.signUp(signUpDto);
  }
}
