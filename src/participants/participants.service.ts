import { HttpException, Injectable } from '@nestjs/common';
import { Participant, Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

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
    const randomId = await this.getRandomParticipant(id);
    if(!randomId) throw new HttpException(`Error: No participants present for raffle`, 400);
    return this.databaseService.participant.update({
      where: {
        id: randomId,
        raffle: {
          id
        }
      },
      data: {
        isWinner: true
      }
    })
  }

  async getRandomParticipant(id: number):Promise<number> {
    //since this is a small application we don't need to worry about the length of participants
    const allIds = await this.databaseService.participant.findMany({
      where: {
        raffle: {
          id
        }
      },
      select: {
        id: true,
        firstName: true,
      }
    })
    allIds.sort(() => 0.5 - Math.random())
    const randomIds = allIds.slice(0, allIds.length).map((participant) => participant.id);
    const randomId = this.getRandomId(randomIds);
    return randomId;
  }

  getRandomId (list: number[]): number {
    return list[Math.floor((Math.random()*list.length))];
  }
}
