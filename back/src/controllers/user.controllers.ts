import { Request, Response} from "express";
import {createUserService, userGetAllService, userGetByIDService} from '../services/user.service'
import { UserDto } from "../dtos/user.dto";
import { loginCredentialService } from "../services/credentials.service";
import { CredentialDto } from "../dtos/credential.dto";
import { IUser } from "../interfaces/IUser.interface";

export const userGetAll = async ( req:Request, res:Response) =>{
    try{
        const allUsers = await userGetAllService()
        res.status(200).send(allUsers)
    }
    catch(error){
        res.status(404).json({message: `Error: ${error}`})
    }
}

export const userGetByID = async (req:Request, res:Response)=>{
    try{
        const userFinded = await userGetByIDService(req.params.id)
        res.status(200).json(userFinded)
    }catch(error){
        res.status(404).json(error)
    }
}

export const createUser = async (req:Request, res:Response)=>{
    try{
        const userInfo:UserDto = req.body.userInfo;
        const credentialInfo:CredentialDto = req.body.credentialInfo;
        const result:IUser = await createUserService(userInfo, credentialInfo);
        res.status(201).json(result);
    }catch(error){
        res.status(404).json(error);
    }
}

export const loginUser = async (req: Request, res:Response)=>{
    try{
        const { password, email } = req.body;
        await loginCredentialService(email, password);
        res.status(200).json({message: "User was loggin correctly"})
    }catch(error){
        console.log(error)
        res.status(404).json(error)
    }
    
}
