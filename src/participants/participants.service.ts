import { HttpException, Injectable } from '@nestjs/common';
import { Participant, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { UpdateRaffleDto } from 'src/raffles/dtos/UpdateRaffle.dto';

type raffle = {
  id: number,

}
@Injectable()
export class ParticipantsService {
  constructor(private readonly databaseService: DatabaseService) {}

  async findAllParticipantsByRaffleId(id: number) {
    return this.databaseService.participant.findMany({
      where: {
        raffle: {
          id
        }
      }
    })
  }

  async create(raffleId: number, data: Prisma.ParticipantCreateWithoutRaffleInput) {
    return this.databaseService.participant.create({ data: {
      ...data,
      raffleId,
    } })
  }

  async updateParticipantWinner(id: number): Promise<Participant> {
    const participantId = await this.getRandomParticipantId(id);
    console.log("what is participantId", participantId)
    if(!participantId) throw new HttpException(`Error: No participants present for raffle`, 400);
    return this.databaseService.participant.update({
      where: {
        id: participantId
      },
      data: {
        isWinner: true
      }
    })
  }

  async getRandomParticipantId(raffleId: number): Promise<number> {
    const count = await this.databaseService.participant.count({
      where: {
        raffle: {
          id: raffleId
        }
      }
    })
    if(!count) throw new HttpException(`No participants present for raffleId: ${raffleId}, cannot select winner`, 400);
    return this.getRandomInteger(1, count)
  }

  getRandomInteger(min:number = 1, max: number):number {
    if(min === max) return max;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
  }
}
