import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { DecryptedToken } from '@interfaces/decrypted-token.interface';
import { User } from '@entities/User.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<UserInfo> {
    const user = await this.usersService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    return this.generateJwtToken(user);
  }

  async signUp(userinfo: CreateUserDto): Promise<UserInfo> {
    const createdUser = await this.usersService.create(userinfo);

    return this.generateJwtToken(createdUser);
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  private async generateJwtToken(user: User): Promise<UserInfo> {
    const { firstName, lastName, email, id } = user;

    const token: DecryptedToken = {
      id,
      firstName,
      lastName,
      email,
    };

    const jwt = this.jwtService.sign(token, { secret: 'some-super-secret' });
    return {
      jwt,
      user: { ...token },
    };
  }
}

export interface UserInfo {
  jwt: string;
  user: DecryptedToken;
}
