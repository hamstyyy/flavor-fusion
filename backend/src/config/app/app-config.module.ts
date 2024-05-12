import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppConfigService } from './app-config.service';
import appConfiguration from './app-configuration';
import { getEnvFilePaths } from '../../helpers/get-env-path';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfiguration],
      envFilePath: [...getEnvFilePaths()],
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
