import { Request, Response} from "express";
import {createUserService, userGetAllService, userGetByIDService} from '../services/user.service'
import { UserDto } from "../dtos/user.dto";

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
        const userFinded = await userGetByIDService(Number(req.params.id))
        res.status(200).json(userFinded)
    }catch(error){
        res.status(404).json(error)
    }
}

export const createUser = async (req:Request, res:Response)=>{
    try{
        const userInfo:UserDto = req.body;
        const result = await createUserService(userInfo);
        res.status(201).json(result);
    }catch(error){
        res.status(404).json(error);
    }
}
