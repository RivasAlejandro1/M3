import { DataSource } from 'typeorm';
import { User } from '../entities/User.entity';
import { Credential } from '../entities/Credential.entity';
import { Appointment } from '../entities/appointment.entity';
import { DATABASE, PASSWORD, PORT_DATABASE, USERNAME } from './env';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: PORT_DATABASE,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
    synchronize: true,
    logging: true,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
});