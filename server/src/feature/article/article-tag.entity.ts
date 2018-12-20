import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('t_article_tag')
export class ArticleTagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tagCode: number;

  @Column()
  articleId: number;
}