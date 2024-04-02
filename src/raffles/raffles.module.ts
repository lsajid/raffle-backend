import { Module } from '@nestjs/common';
import { RafflesService } from './raffles.service';
import { ParticipantsService } from 'src/participants/participants.service';

@Module({
  controllers: [],
  providers: [RafflesService, ParticipantsService],
})
export class RafflesModule {}
