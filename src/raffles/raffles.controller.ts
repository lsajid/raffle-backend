import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { RafflesService } from './raffles.service';
import { Prisma } from '@prisma/client';
import { ParticipantsService } from 'src/participants/participants.service';

@Controller('raffles')
export class RafflesController {
  constructor(
    private readonly rafflesService: RafflesService,
    private readonly participantsService: ParticipantsService,
  ) {}
  @Get()
  getAllRaffles() {
    return this.rafflesService.findAll();
  }

  @Post()
  createRaffle(@Body() raffle: Prisma.RaffleCreateInput) {
    return this.rafflesService.create(raffle);
  }

  @Get(':id')
  getRaffle(@Param('id', ParseIntPipe) id: number) {
    return this.rafflesService.findOne(id);
  }

  @Get(':id/participants')
  findAllParticipants(@Param('id', ParseIntPipe) id: number) {
    return this.participantsService.findOne(id);
  }

  @Post(':id/participants')
  createParticipant(@Param('id') id: string) {
    return `This action signs up a participant for raffle id ${id}`;
  }

  @Get(':id/winner')
  findWinner(@Param('id') id: string) {
    return `This action retrieves the winner of a raffle ${id}`;
  }

  @Patch(':id/winner')
  selectWinner(@Param('id') id: string) {
    return `this action retrieves the winner of a raffle ${id}`;
  }
}
