import { Router } from 'express';
import { userGetAll, userGetByID} from '../controllers/user.controllers';
const userRouter: Router = Router();

userRouter.get("", userGetAll);
userRouter.get("/:id", userGetByID);


export default userRouter;