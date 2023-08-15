import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewUsersModule } from './new-users/new-users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'configaration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/env/${process.env.NODE_ENV}.env`,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        database: 'users',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        synchronize: true,
        logging: false,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
      }),
    }),
    NewUsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
