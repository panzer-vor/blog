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

export class UpdateTagDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly code: number;
}

export class AddTagDto {
  @IsString()
  readonly name: string;
}