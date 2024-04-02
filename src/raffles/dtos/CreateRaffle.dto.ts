import { IsString, IsNotEmpty, IsBoolean } from "class-validator";

class CreateRaffleDto {
    @IsString()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    secretToken: string;
    
    @IsBoolean()
    isActive: boolean;
}