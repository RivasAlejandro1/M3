import { Request, Response} from "express";
import {createUserService, getUserByCredentialIdService, userGetAllService, userGetByIDService} from '../services/user.service'
import { UserDto } from "../dtos/user.dto";
import { loginCredentialService } from "../services/credentials.service";
import { CredentialDto } from "../dtos/credential.dto";
import { IUser } from "../interfaces/IUser.interface";
import { ICredential } from "../interfaces/ICredential.interface";

export const userGetAll = async ( req:Request, res:Response) =>{
    try{
        const allUsers = await userGetAllService()
        res.status(200).send(allUsers)
    }
    catch(error:any){
         res.status(404).json({Error: error?.message})
    }
}

export const userGetByID = async (req:Request, res:Response)=>{
    try{
        const userFinded = await userGetByIDService(req.params.id)
        res.status(200).json(userFinded)
    }catch(error:any){
        res.status(404).json({Error: error?.message})
    }
}

export const createUser = async (req:Request, res:Response)=>{
    try{
        const userInfo:UserDto = req.body;
        console.log(1)
        console.log(userInfo)
        const result:IUser = await createUserService(userInfo);
        res.status(201).json(result);
    }catch(error:any){
        console.log(1)
        res.status(404).json({Error: error?.message});
    }
}

export const loginUser = async (req: Request, res:Response)=>{
    try{
        const { password, username } = req.body;
        const idUser:ICredential = await loginCredentialService(username, password);
        const userFinded = await getUserByCredentialIdService(idUser);
        res.status(200).json(userFinded);
    }catch(error:any){
        console.log(error)
        res.status(404).json({Error: error?.message});
    }
    
}
