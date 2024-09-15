import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential.entity";
import { Appointment } from "./appointment.entity";

@Entity({
    name: "users"
})
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column("varchar")
    name: string
    
    @Column("varchar")
    email: string
    
    @Column("date")
    birthdate: Date
    
    @Column("int")
    nDni: number
    
    @OneToOne(() => Credential)
    @JoinColumn()
    credentialId: Credential

    @OneToMany(()=> Appointment, (appointment)=> appointment.userId)
    appointments: Appointment[]

} 

