import {CredentialDto} from '../dtos/credential.dto';
import {ICredential} from '../interfaces/ICredential.interface'

const credentials: ICredential[] = [
    {
        id: 1,
        username: "a",
        password: "a"
        
    },
    {
        id: 2,
        username: "p",
        password: "p"
        
    },
]

export const  createCredentialService=  async (infoCredenital:CredenitalDto):Promise<number> =>{
    const {password, username} = infoCredenital;
    const newId: number = credentials[credentials.length-1].id +1;
    const newCredential:ICredential = {
        password,
        username,
        id: newId
    };
    credentials.push(newCredential)

    return newId;
}

export const loginCredentialService = async(username:string, password:string):Promise<number> =>{
    const existUsername:ICredential|undefined = credentials.find(credential => credential.username == username);
    if(!existUsername) throw new Error("username o Password are incorrect");
    if(existUsername.password != password) throw new Error("username o Password are incorrect");
    
    return existUsername.id;
}