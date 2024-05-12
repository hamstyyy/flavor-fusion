import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get dialect(): string {
    return this.configService.get<string>('database.dialect');
  }

  get host(): string {
    return this.configService.get<string>('database.host');
  }

  get port(): number {
    return +this.configService.get<string>('database.port');
  }

  get name(): string {
    return this.configService.get<string>('database.name');
  }

  get user(): string {
    return this.configService.get<string>('database.user');
  }

  get password(): string {
    return this.configService.get<string>('database.password');
  }
}
