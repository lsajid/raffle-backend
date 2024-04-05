import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class UpdateRaffleDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsNotEmpty()
  secretToken: string;

  @IsBoolean()
  isActive?: boolean;
}
