import { Router } from 'express';
import { userGetAll} from '../controllers/user.controllers'
const userRouter: Router = Router();

userRouter.get("", userGetAll)


export default userRouter