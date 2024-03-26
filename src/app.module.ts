import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RafflesController } from './raffles/raffles.controller';

@Module({
  imports: [],
  controllers: [AppController, RafflesController],
  providers: [AppService],
})
export class AppModule {}
