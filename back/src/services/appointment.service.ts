import { AppoinmentDto } from "../dtos/appointment.dto";
import { IAppointment } from "../interfaces/IAppointment.interface"

const appointments:IAppointment[] = [
    {
        id: 1,
        date: new Date("2000/04/02"),
        status: "cancelled",
        time: 1,
        userId: 1
         
    },
    {
        id: 2,
        date: new Date("2019/08/01"),
        status: "active",
        time: 1,
        userId: 1   
    },
    
]

export const getAllAppointmentsService =  async():Promise<IAppointment[]>=>{
    return appointments;
}

export const getAppointmentByIDService =  async(id:number):Promise<IAppointment>=>{
    const appointmentFinded:IAppointment|undefined = appointments.find(appointment => appointment.id == id)
    if(!appointmentFinded) throw new Error(`The Appointment with id:${id} Not Found`)
    return appointmentFinded;
}

export const scheduleAppointmentService =  async(infoAppointment:AppoinmentDto):Promise<IAppointment>=>{
    const appointmentIndex:number = appointments[appointments.length - 1].id; 
    const newId:number = appointmentIndex +1;
    
    const { date, time, userId } = infoAppointment;
    const newAppointment:IAppointment = {
        id: newId,
        date,
        status: "active",
        time,
        userId
    }

    appointments.push(newAppointment);

    return newAppointment;
}

export const cancelAppointmentService =  async(id:number):Promise<IAppointment>=>{
    const index:number|undefined = appointments.findIndex(appointment => appointment.id == id);
    
    if(!appointments[index]) throw new Error(`The Appointment with id:${id} Not Found`);
    if(appointments[index].status == "cancelled") throw new Error(`The Appoinment was canceled`);
    appointments[index].status = "cancelled";
    return appointments[index];
    
}