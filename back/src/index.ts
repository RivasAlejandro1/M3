import server from "./server";
import { PORT } from "./config/env";
import "reflect-metadata";
import { AppDataSource } from './config/appDataSource';
import { usersInfo } from "./abc/usersInfo";
import { AppointmentInfo } from "./abc/AppointmentInfo";
import { seederUserService } from "./services/user.service";
import { seederAppointmentService} from "./services/appointment.service";

AppDataSource.initialize()
    .then(
        async ()=>{
            await server
            .listen(PORT || 3000, 
                ()=>{
                    console.log(`Server listening on port ${PORT? PORT : 3000}`)
                }
            )
        }
    )
    .then(
        async ()=>{
            await seederUserService(usersInfo);
        }
    )
    .then(
        async ()=>{
            await seederAppointmentService(AppointmentInfo);
        }
    )