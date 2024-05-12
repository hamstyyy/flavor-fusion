import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { DecryptedToken } from 'src/interfaces/decrypted-token.interface';
import { User } from 'src/database/entities/User.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(email);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(userinfo: CreateUserDto): Promise<{ access_token: string }> {
    const createdUser = await this.usersService.create(userinfo);

    const payload = { sub: createdUser.id, email: createdUser.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  createJwtToken(user: User): UserInfo {
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
      ...token,
    };
  }
}

export interface UserInfo extends DecryptedToken {
  jwt: string;
}
