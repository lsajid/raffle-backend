import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RafflesController } from './raffles/raffles.controller';
import { UsersModule } from './users/users.module';
import { RafflesModule } from './raffles/raffles.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [UsersModule, RafflesModule],
  controllers: [AppController, RafflesController, UsersController],
  providers: [AppService],
})
export class AppModule {}
