import {IUser} from '../interfaces/IUser.interface';
import {  UserDto} from '../dtos/user.dto';
import {CredentialDto} from '../dtos/credential.dto'
import {ICredential} from '../interfaces/ICredential.interface'
import {createCredentialService} from './credentials.service';
import { AppDataSource } from '../config/appDataSource';
import { User } from '../entities/User.entity';


export const userGetAllService = async ():Promise<IUser[]>=>{
    const allUsers:IUser[] = await AppDataSource.manager.find(User)
    throw new Error()
    return allUsers;
} 

export const userGetByIDService = async (id:string):Promise<IUser>=>{
    const userFinded:IUser|null = await AppDataSource.manager.findOneBy(User,{
        id
    })

    if (!userFinded) throw new Error("User Not Found");
    return userFinded;
} 

export const createUserService = async (infoUser:UserDto):Promise<IUser> =>{

    console.log(infoUser);
    const {
        name, 
        email, 
        birthdate, 
        nDni, 
        username, 
        password
    } = infoUser;
    const infoCredential:CredentialDto = {
        username, 
        password
    };

    const newCredential:ICredential = await createCredentialService(infoCredential);
    
    const newUser:IUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.birthdate = new Date(birthdate);
    newUser.nDni = nDni;
    newUser.credentialId = newCredential;

    return await AppDataSource.manager.save(newUser);

}

export const seederUserService = async (infoSeeder:UserDto[])=>{
    
    const existUsers:User[] = await AppDataSource.manager.find(User)
    if(existUsers.length >= 10) return; 
    await Promise.all(
        infoSeeder
        .map(
            async (userinfo:UserDto)=>
                {
                    await createUserService(userinfo);
                }
        )
    )
}