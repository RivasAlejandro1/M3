import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User.entity"

@Entity({
    name: "appointments"
})
export class Appointment{
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column("date")
    date: Date
    @Column("decimal")
    time: number
    @Column("varchar")
    status: string

    @ManyToOne(()=> User, (user) => user.appointments)
    userId: User
} 