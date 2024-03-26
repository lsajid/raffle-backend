import { Module } from '@nestjs/common';
import { RafflesService } from './raffles.service';

@Module({
  controllers: [],
  providers: [RafflesService],
})
export class RafflesModule {}
