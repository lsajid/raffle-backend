import { Module } from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { DatabaseService } from 'src/database/database.service';
import { RafflesController } from 'src/raffles/raffles.controller';
import { RafflesService } from 'src/raffles/raffles.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [RafflesController],
  providers: [ParticipantsService, DatabaseService, RafflesService],
})
export class ParticipantsModule {}
