import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('raffles')
export class RafflesController {
  @Get()
  findAll() {
    return `This action returns all raffle`;
  }

  @Post()
  createRaffle() {
    return `This action creates a new raffle`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns ${id} raffle`;
  }

  @Get(':id/participants')
  findAllParticipants(@Param('id') id: string) {
    return `This action Retrieve all participants of a raffle for ${id}`;
  }

  @Post(':id/participants')
  createParticipant(@Param('id') id: string) {
    return `This action signs up a participant for raffle id ${id}`;
  }

  @Get(':id/winner')
  findWinner(@Param('id') id: string) {
    return `This action retrieves the winner of a raffle ${id}`;
  }
}
