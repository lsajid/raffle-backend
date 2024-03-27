import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ParticipantsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.product.findMany({});
  }

  async findOne(id: number) {
    return this.databaseService.product.findUnique({
      where: {
        id,
      },
    });
  }
}
