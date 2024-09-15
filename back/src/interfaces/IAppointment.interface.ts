import { User } from "../entities/User.entity";

export interface IAppointment{
    id: string,
    date: Date,
    time: number,
    userId: User,
    status: string
} 