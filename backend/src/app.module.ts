import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './database/entities/User.entity';
import { PassportModule } from '@nestjs/passport';
import { DatabaseConfigModule } from './config/database/database-config.module';
import { DatabaseConfigService } from './config/database/database-config.service';
import { AppConfigModule } from './config/app/app-config.module';

@Module({
  imports: [
    AppConfigModule,
    AuthModule,
    UsersModule,
    PassportModule,
    TypeOrmModule.forRootAsync({
      imports: [DatabaseConfigModule],
      useFactory: (databaseConfigService: DatabaseConfigService) => ({
        name: 'default',
        host: databaseConfigService.host,
        type: 'postgres',
        port: databaseConfigService.port,
        database: databaseConfigService.name,
        logging: false,
        username: databaseConfigService.user,
        password: databaseConfigService.password,
        entities: [User],
        synchronize: true,
      }),
      inject: [DatabaseConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
