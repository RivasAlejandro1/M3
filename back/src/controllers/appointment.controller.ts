import {Request, Response} from 'express';
import { cancelAppointmentService, getAllAppointmentsByUserIDService, getAllAppointmentsService, getAppointmentByIDService, scheduleAppointmentService } from '../services/appointment.service';
import { IAppointment } from '../interfaces/IAppointment.interface';

export const getAllAppointments =  async(req:Request, res:Response)=>{
    try{
        const allAppoinments = await getAllAppointmentsService();
        res.status(200).json(allAppoinments);
        
    }catch(error:any){
        res.status(404).json({Error: error?.message})
    }
}
export const getAllAppointmentsByUserID =  async(req:Request, res:Response)=>{
    try{

        const { id } = req.params;
        const allAppoinments = await getAllAppointmentsByUserIDService(id);
        res.status(200).json(allAppoinments);
        
    }catch(error:any){
        res.status(404).json({Error: error?.message})
    }
}

export const getAppointmentByID =  async(req:Request, res:Response)=>{
    try{
        const { id } = req.params; 
        const appointmentFinded:IAppointment = await getAppointmentByIDService(id);
        res.status(200).json(appointmentFinded);
    }catch(error:any){
        res.status(404).json({Error: error?.message})

    }
}

export const scheduleAppointment =  async(req:Request, res:Response)=>{
    try{
        const appointmentCreated = await scheduleAppointmentService(req.body)
        res.status(201).json(appointmentCreated);
    }catch(error:any){
        res.status(404).json({Error: error?.message})
    }
}

export const cancelAppointment =  async(req:Request, res:Response)=>{
    try{
        const result = await cancelAppointmentService(req.params.id);
        res.status(201).json(result);
    }catch(error:any){
        res.status(404).json({Error: error?.message})

    }
}