import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RafflesController } from './raffles/raffles.controller';
import { UsersModule } from './users/users.module';
import { RafflesModule } from './raffles/raffles.module';
import { UsersController } from './users/users.controller';
import { ParticipantsModule } from './participants/participants.module';
import { UsersService } from './users/users.service';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { RafflesService } from './raffles/raffles.service';
import { ParticipantsService } from './participants/participants.service';

@Module({
  imports: [
    UsersModule,
    RafflesModule,
    ParticipantsModule,
    ProductsModule,
    DatabaseModule,
  ],
  controllers: [AppController, RafflesController, UsersController],
  providers: [AppService, UsersService, RafflesService, ParticipantsService],
})
export class AppModule {}
