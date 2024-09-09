import { Request, Response} from "express";
import {userGetAllService, userGetByIDService} from '../services/user.service'
import { error } from "console";

export const userGetAll = async ( req:Request, res:Response) =>{
    try{
        const allUsers = await userGetAllService()
        res.status(201).send(allUsers)
    }
    catch(error){
        res.status(404).json({message: `Error: ${error}`})
    }
}

export const userGetByID = async (req:Request, res:Response)=>{
    try{
        const userFinded = await userGetByIDService(Number(req.params.id))
        res.status(201).json(userFinded)
    }catch(error){
        res.status(404).json(error)
    }
}

