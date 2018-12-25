import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('t_tag')
export class TagEntity {
  @PrimaryGeneratedColumn()
  code: number;

  @Column()
  name: string;

  @Column({
    default: 0
  })
  pcode: number;
}