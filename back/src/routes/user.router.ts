import { Router } from 'express';
import { createUser, userGetAll, userGetByID} from '../controllers/user.controllers';
const userRouter: Router = Router();

userRouter.get("", userGetAll);
userRouter.get("/:id", userGetByID);
userRouter.post("/", createUser);


export default userRouter;