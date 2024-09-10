import { Router } from 'express';
import userRouter from './user.router';
import appointmentRouter from './appointment.router'

const router:Router = Router();

router.use("/user", userRouter);
router.use("/appointment", appointmentRouter);

export default router;
