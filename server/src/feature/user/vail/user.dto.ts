import { IsString, Length, IsInt, Min } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @Length(1, 10)
  readonly username: string;

  @IsString()
  readonly password: string;
}

export class AddUserDto {
  @IsString()
  @Length(1, 10)
  readonly username: string;

  @IsString()
  readonly password: string;

  @IsInt()
  @Min(1)
  readonly role: number;
}