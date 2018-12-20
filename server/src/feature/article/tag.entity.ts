import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('t_tag')
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: number;

  @Column()
  pcode: number;
}