import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, Raffle } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import { ParticipantsService } from 'src/participants/participants.service';
import { UpdateRaffleDto } from './dtos/UpdateRaffle.dto';

@Injectable()
export class RafflesService {
  constructor(private readonly databaseService: DatabaseService, private readonly participantService: ParticipantsService) {}

  async createRaffle(createRaffleDto: Prisma.RaffleCreateInput) {
    return this.databaseService.raffle.create({ data: createRaffleDto });
  }

  async findAllRaffles() {
    return this.databaseService.raffle.findMany();
  }

  async findRaffle(id: number) {
    return this.databaseService.raffle.findUnique({
      where: {
        id,
      },
      include: {
        participants: true
      }
    });
  }

  async updateRaffleStatus(id: number, updateRaffleDto: Prisma.RaffleUpdateInput): Promise<Raffle> {
    const raffle = await this.findRaffle(id);
    if(!raffle) throw new HttpException('Raffle Not Found', 404);
    if(updateRaffleDto.secretToken !== raffle.secretToken) throw new HttpException('Invalid Secret Token', 498)
    return this.databaseService.raffle.update({
      where: {
        id,
      },
      data: {
        isActive: false
      },
    });
  }

  async chooseRaffleWinner(id: number, updateRaffleDto: UpdateRaffleDto) {
    const updatedRaffle = await this.updateRaffleStatus(id, updateRaffleDto)
    const updatedParticipant = await this.participantService.updateParticipantWinner(id);
    return { raffle: updatedRaffle, winner: updatedParticipant}
  }

  async getRaffleWinner(id: number) {
    return this.databaseService.raffle.findUniqueOrThrow({
      where: {
        id
      }, 
      include: {
        participants: {
          where: {
            isWinner: true,
          }
        }
      }
    })
  }
}
