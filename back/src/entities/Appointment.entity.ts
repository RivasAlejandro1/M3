import { Column, Entity, ManyToOne } from "typeorm"
import { User } from "./User.entity"

@Entity({
    name: "appointments"
})
export class Appointment{
    @Column("varchar")
    id: string
    @Column("date")
    date: Date
    @Column("int")
    time: number
    @Column("varchar")
    status: string


    @ManyToOne(()=> User, (user) => user.appointments)
    userId: string
} 