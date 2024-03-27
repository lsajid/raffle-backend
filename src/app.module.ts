import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RafflesController } from './raffles/raffles.controller';
import { UsersModule } from './users/users.module';
import { RafflesModule } from './raffles/raffles.module';
import { UsersController } from './users/users.controller';
import { ParticipantsModule } from './participants/participants.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [UsersModule, RafflesModule, ParticipantsModule],
  controllers: [AppController, RafflesController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
