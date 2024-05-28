import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User, Recipe, Rating } from '@entities';
import { PassportModule } from '@nestjs/passport';
import { DatabaseConfigModule } from '@database-config/database-config.module';
import { DatabaseConfigService } from '@database-config/database-config.service';
import { AppConfigModule } from '@app-config/app-config.module';
import {
  CreateTables1716803036450,
  Seed1716907720437,
} from './database/migrations';
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
        entities: [User, Recipe, Rating],
        migrations: [CreateTables1716803036450, Seed1716907720437],
        migrationsRun: true,
        synchronize: false,
      }),
      inject: [DatabaseConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
