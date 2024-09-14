import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
    name: "credentials"
})
export class Credential {
    @PrimaryGeneratedColumn("uuid")
    id: string
    
    @Column("varchar")
    username: string
    
    @Column("varchar")
    password: string
    
} 