import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: number;

}