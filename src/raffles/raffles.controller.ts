import { Controller, Get, Param } from '@nestjs/common';

@Controller('raffles')
export class RafflesController {
  @Get()
  findAll() {
    return `This action returns all raffle`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns ${id} raffle`;
  }
}
