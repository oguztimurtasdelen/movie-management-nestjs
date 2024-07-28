import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert, BeforeUpdate } from "typeorm";
import * as bcrypt from 'bcrypt';
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

    /*
    // Hash user's password with salt for registration
    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        if (this.password) {
            const passwordSalt = await bcrypt.genSalt();
            this.password = await bcrypt.hash(this.password, passwordSalt)
        }
    }
    */
}