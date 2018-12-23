import { IsString, Length, IsInt, Min } from 'class-validator';

export class AddArticleDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly article: string;

  @IsInt()
  readonly accessAuthority: number;

  @IsString()
  readonly desc: string;
}