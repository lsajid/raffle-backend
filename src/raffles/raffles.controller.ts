import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Body,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  HttpException,
} from '@nestjs/common';
import { RafflesService } from './raffles.service';
import { Participant, Prisma, Raffle } from '@prisma/client';
import { ParticipantsService } from 'src/participants/participants.service';
import { CreateParticipantDto } from 'src/participants/dtos/CreateParticipant.dto';
import { UpdateRaffleDto } from './dtos/UpdateRaffle.dto';

@Controller('raffles')
export class RafflesController {
  constructor(
    private readonly rafflesService: RafflesService,
    private readonly participantsService: ParticipantsService,
  ) {}
  @Get()
  getAllRaffles() {
    return this.rafflesService.findAllRaffles();
  }

  @Post()
  createRaffle(@Body() raffle: Prisma.RaffleCreateInput) {
    return this.rafflesService.createRaffle(raffle);
  }

  @Get(':id')
  getRaffle(@Param('id', ParseIntPipe) id: number) {
    return this.rafflesService.findRaffle(id);
  }

  @Get(':id/participants')
  findAllParticipants(@Param('id', ParseIntPipe) id: number) {
    return this.participantsService.findAllParticipantsByRaffleId(id);
  }

  @Post(':id/participants')
  @UsePipes(ValidationPipe)
  createParticipant(
    @Param('id', ParseIntPipe) id: number,
    @Body() {...createParticipantDto }: CreateParticipantDto
  ) {
    return this.participantsService.create(id, createParticipantDto);
  }

  @Get(':id/winner')
  findWinner(@Param('id', ParseIntPipe) id: number) {
    const raffleWinner = this.rafflesService.getRaffleWinner(id);
    if(!raffleWinner) throw new HttpException(`No winner has been selected for raffle, please select a winner`, 400);
    return raffleWinner
  }

  @Patch(':id/winner')
  selectWinner(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRaffleDto: UpdateRaffleDto
    ):Promise<{raffle: Raffle, winner: Participant}> {
      return this.rafflesService.chooseRaffleWinner(id, updateRaffleDto);
  }
}
