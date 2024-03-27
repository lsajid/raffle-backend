import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RafflesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createRaffeDto: Prisma.RaffleCreateInput) {
    return this.databaseService.raffle.create({ data: createRaffeDto });
  }

  async findAll() {
    return this.databaseService.raffle.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.raffle.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateRaffleDto: Prisma.RaffleUpdateInput) {
    return this.databaseService.raffle.update({
      where: {
        id,
      },
      data: updateRaffleDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.raffle.delete({
      where: { id },
    });
  }
}
