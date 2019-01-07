import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('t_article')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createTime: Date;

  @Column('varchar(10000)')
  article: string;

  @Column({
    default: 0,
  })
  accessCount: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column('int')
  accessAuthority: number;

  @Column({
    default: '',
  })
  cover: string;
}
