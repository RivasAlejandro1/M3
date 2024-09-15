import { Credential } from "../entities/Credential.entity";


export  interface IUser {
    id: string,
    name: string,
    email: string,
    birthdate: Date,
    nDni: number,
    credentialId: Credential
} 