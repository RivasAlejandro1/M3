import {IUser} from '../interfaces/IUser.interface';
import {  UserDto} from '../dtos/user.dto';
import {CredentialDto} from '../dtos/credential.dto'
import {ICredential} from '../interfaces/ICredential.interface'
import {createCredentialService} from './credentials.service';
const users:IUser[] =[
    {
        id: 1,
        name: "1",
        email: "1@gmail.com",
        birthdate: new Date(2000/11/22),
        nDni: 2143,
        credentialId: 12
    },
     {
        id: 2,
        name: "2",
        email: "2@gmail.com",
        birthdate: new Date(2000/11/22),
        nDni: 2143,
        credentialId: 12
    },
     {
        id: 3,
        name: "3",
        email: "3@gmail.com",
        birthdate: new Date(2000/11/22),
        nDni: 2143,
        credentialId: 12
    },
     {
        id: 4,
        name: "4",
        email: "4@gmail.com",
        birthdate: new Date(2000/11/22),
        nDni: 2143,
        credentialId: 12
    },
     {
        id: 5,
        name: "5",
        email: "5@gmail.com",
        birthdate: new Date(2000/11/22),
        nDni: 2143,
        credentialId: 12
    }
];


export const userGetAllService = async ():Promise<IUser[]>=>{
    const allUsers:IUser[] = users
    return allUsers;
} 

export const userGetByIDService = async (id:number):Promise<IUser>=>{
    const userFinded:IUser|undefined = users.find(user => user.id = id);

    if (!userFinded) throw new Error("User Not Found");
    return userFinded;
} 

export const createUserService = async (infoUser:UserDto, infoCredential:CredentialDto):Promise<IUser> =>{

    const lastIndex:number = users[users.length - 1].id;
    const {name, email, birthdate, nDni} = infoUser;
    const newCredential:number = await createCredentialService(infoCredential);
    const newUser:IUser = {
        name,
        email,
        id: lastIndex+1,
        birthdate,
        nDni,
        credentialId: newCredential
    };
    
    users.push(newUser);

    return newUser;

}

/* export const loginUserService = async(email:string, password:string):Promise<boolean> =>{
    const existUser:IUser|undefined = users.find(user => user.email == email);
    if(!existUser) throw new Error("Email o Password are incorrect");
    if(existUser.password != password) throw new Error("Email o Password are incorrect");
    
    return true
} */