import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(['INTERN', 'ADMIN'], {
    message: 'Valid role required, please input either INTERN or ADMIN',
  })
  role: 'INTERN' | 'ADMIN';
}
