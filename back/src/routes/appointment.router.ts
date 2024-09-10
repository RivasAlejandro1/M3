import { Router } from 'express';
import { cancelAppointment, getAllAppointments, getAppointmentByID, scheduleAppointment } from '../controllers/appointment.controller'

const appointmentRouter:Router = Router();

appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:id", getAppointmentByID);
appointmentRouter.post("/schedule", scheduleAppointment);
appointmentRouter.put("/cancel/:id", cancelAppointment);

export default appointmentRouter; 