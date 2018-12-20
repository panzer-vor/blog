import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('t_article')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createTime: Date;

  @Column()
  article: string;

  @Column()
  accessCount: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column('int')
  accessAuthority: string;

  @Column()
  cover: string;
}
