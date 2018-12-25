import { IsString, IsInt } from 'class-validator';

export class AddArticleDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly article: string;

  @IsInt()
  readonly accessAuthority: number;

  readonly desc?: string;

  readonly tagCodes?: string[];
}

export class UpdateArticleDto {
  @IsString()
  readonly title: string;

  @IsString()
  readonly article: string;

  @IsInt()
  readonly accessAuthority: number;

  @IsString()
  readonly desc: string;

  @IsInt()
  readonly id: number;
}