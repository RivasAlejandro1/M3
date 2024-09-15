import { AppoinmentDto } from "../dtos/appointment.dto";
import { IAppointment } from "../interfaces/IAppointment.interface";
import { AppDataSource } from "../config/appDataSource";
import { Appointment } from "../entities/appointment.entity";
import { User } from "../entities/User.entity";

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

    
    /* const appointmentIndex:number = appointments[appointments.length - 1].id; 
    const newId:number = appointmentIndex +1;
    const newAppointment:IAppointment = {
        id: newId,
        date,
        status: "active",
        time,
        userId
    }
    appointments.push(newAppointment);
     */


    const { date, time, userId } = infoAppointment;
    newAppointment.date = date;
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