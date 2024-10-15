import { AppDataSource } from '../config/appDataSource';
import {CredentialDto} from '../dtos/credential.dto';
import { Credential } from '../entities/Credential.entity';
import {ICredential} from '../interfaces/ICredential.interface'



export const  createCredentialService=  async (infoCredenital:CredentialDto):Promise<ICredential> =>{
    const {
        password, 
        username
    } = infoCredenital;

    const newCredential = new Credential();
    newCredential.password = password;
    newCredential.username = username;
    
    return await AppDataSource.manager.save(newCredential);
}

export const loginCredentialService = async(username:string, password:string):Promise<ICredential> =>{

    const existUsername:ICredential|null = await AppDataSource.manager.findOneBy(Credential, {
        username
    }) 
    if(!existUsername) throw new Error("username o Password are incorrect");
    if(existUsername.password != password) throw new Error("username o Password are incorrect");
    
    return existUsername;
}

