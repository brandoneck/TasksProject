import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes({
      path: '/users', method: RequestMethod.GET},
      {path: '/users', method: RequestMethod.POST});
  }
}
