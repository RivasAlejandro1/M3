import { AppoinmentDto } from "../dtos/appointment.dto";
import { IAppointment } from "../interfaces/IAppointment.interface";
import { AppDataSource } from "../config/appDataSource";
import { Appointment } from "../entities/appointment.entity";
import { User } from "../entities/User.entity";
import { scheduleAppointment } from "../controllers/appointment.controller";
import { userGetAllService } from "./user.service";
import { IUser } from "../interfaces/IUser.interface";

export const getAllAppointmentsService =  async():Promise<IAppointment[]>=>{
    return  await AppDataSource.manager.find(Appointment);
}

export const getAppointmentByIDService =  async(id:string):Promise<IAppointment>=>{
    const appointmentFinded:Appointment| null = await AppDataSource.manager.findOneBy(Appointment, {id})
    if(!appointmentFinded) throw new Error(`The Appointment with id:${id} Not Found`)
    return appointmentFinded;
}

export const scheduleAppointmentService =  async(infoAppointment:AppoinmentDto):Promise<IAppointment>=>{
    
    const newAppointment:IAppointment = new Appointment();
    const { date, time, userId } = infoAppointment;
    newAppointment.date = new Date(date);
    newAppointment.status = "active";
    newAppointment.time = time;
    
    const userFinded: User |null =  await AppDataSource
        .manager
        .findOneBy(User, {
            id: userId
        });
    if(!userFinded) throw new Error("The User no exist");
    newAppointment.userId = userFinded;

    return await AppDataSource
    .manager
    .save(Appointment, newAppointment);
}

export const cancelAppointmentService =  async(id:string):Promise<IAppointment>=>{

   
    const appointmentFinded:Appointment|null = await AppDataSource.manager.findOneBy(Appointment,{
        id
    })
    if(!appointmentFinded) throw new Error("The Appointment not exist");
    if(appointmentFinded.status == "cancelled") throw new Error(`The Appoinment was canceled`);


    await AppDataSource.manager.update(Appointment,appointmentFinded,{status: "cancelled"})
    appointmentFinded.status = "cancelled";
    return appointmentFinded; 
    
}

export const seederAppointmentService = async (infoSeeder:any)=>{
    
     const allUsers:IUser[] =await userGetAllService()

     const user1:IUser|undefined = allUsers.find(user => user.email = "ana.martinez@example.com" );
     const user2:IUser|undefined = allUsers.find(user => user.email = "luis.perez@example.com" );
     const user3:IUser|undefined = allUsers.find(user => user.email = "marta.gomez@example.com" );

     if(!user1 || !user2 || !user3) throw new Error("The Users not exist")
     let count =  0;
     const existAppointment:IAppointment[] = await AppDataSource.manager.find(Appointment)
     if(existAppointment.length >= 10) return; 
     await Promise.all(
        infoSeeder
        .map(
            async (appoinmentInfo:Omit<AppoinmentDto, "userId">)=>
                {
                    const currentUser:IUser|undefined = count == 0 ? user1 : count == 1 ? user2 : user3;
                    const appointmentInfoReady:AppoinmentDto = {...appoinmentInfo, userId:currentUser.id}
                    await scheduleAppointmentService(appointmentInfoReady);
                }
        )
    )
}