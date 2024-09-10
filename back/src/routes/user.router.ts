import { Router } from 'express';
import { createUser, loginUser, userGetAll, userGetByID} from '../controllers/user.controllers';
const userRouter: Router = Router();

userRouter.get("", userGetAll);
userRouter.get("/:id", userGetByID);
userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);


export default userRouter;