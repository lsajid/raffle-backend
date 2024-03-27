import { Controller, Get } from '@nestjs/common';

@Controller('participants')
export class ParticipantsController {
  @Get()
  findAll() {
    return `This actioin returns all raffles`;
  }
}
