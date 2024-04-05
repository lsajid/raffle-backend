import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateParticipantDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsNumber()
  @IsNotEmpty()
  raffleId: number;
}
