import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RafflesController } from './raffles/raffles.controller';
import { RafflesModule } from './raffles/raffles.module';
import { ParticipantsModule } from './participants/participants.module';
import { DatabaseModule } from './database/database.module';
import { RafflesService } from './raffles/raffles.service';
import { ParticipantsService } from './participants/participants.service';

@Module({
  imports: [RafflesModule, ParticipantsModule, DatabaseModule],
  controllers: [AppController, RafflesController],
  providers: [AppService, RafflesService, ParticipantsService],
})
export class AppModule {}
