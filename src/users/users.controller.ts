import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return `This should return all users`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This should return user id : ${id}`;
  }
}
