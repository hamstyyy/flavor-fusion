import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { DatabaseConfigService } from './database-config.service';
import configuration from './database-configuration';
import { getEnvFilePaths } from '../../helpers/get-env-path';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: [...getEnvFilePaths()],
    }),
  ],
  providers: [ConfigService, DatabaseConfigService],
  exports: [ConfigService, DatabaseConfigService],
})
export class DatabaseConfigModule {}
