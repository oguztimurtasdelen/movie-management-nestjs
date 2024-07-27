import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Ticket } from "src/modules/tickets/entities/ticket.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    age: number;

    @Column({default: 'Customer'})
    role: string;

    @OneToMany(() => Ticket, (ticket) => ticket.user)
    tickets: Ticket[];
}