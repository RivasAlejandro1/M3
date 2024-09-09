import { Request, Response} from "express";
import {userGetAllService} from '../services/user.service'
import { error } from "console";

export const userGetAll = async ( req:Request, res:Response) =>{
    try{
        const allUsers = await userGetAllService()
        throw new Error("mmm..")
        res.status(201).send(allUsers)
    }
    catch(error){
        res.status(404).json({message: `Error: ${error}`})
    }
}

