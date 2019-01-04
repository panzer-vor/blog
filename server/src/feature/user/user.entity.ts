import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('t_user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: number;
}