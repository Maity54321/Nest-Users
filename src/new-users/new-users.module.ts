import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { NewUsersService } from './new-users.service';
import { NewUsersController } from './new-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewUser } from './entities/new-user.entity';
import { UserRepository } from './repo/user.repository';
import { UsersMiddleware } from './middlewares/new-users.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([NewUser])],
  controllers: [NewUsersController],
  providers: [NewUsersService, UserRepository],
})
export class NewUsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsersMiddleware).forRoutes('api/v1');
  }
}
