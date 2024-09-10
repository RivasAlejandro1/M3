import IUser from '../interfaces/IUser.interface';
import {UserDto} from '../dtos/user.dto';
const users:IUser[] =[
    {
        id: 1,
        name: "1",
        email: "1@gmail.com",
        password: "a1"
    },
     {
        id: 2,
        name: "2",
        email: "2@gmail.com",
        password: "a2"
    },
     {
        id: 3,
        name: "3",
        email: "3@gmail.com",
        password: "a3"
    },
     {
        id: 4,
        name: "4",
        email: "4@gmail.com",
        password: "a4"
    },
     {
        id: 5,
        name: "5",
        email: "5@gmail.com",
        password: "a5"
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



export const createUserService = async (infoUser:UserDto):Promise<IUser> =>{

    const lastIndex:number = users[users.length - 1].id;
    const {name, password, email} = infoUser;
    const newUser:IUser = {
        name,
        password,
        email,
        id: lastIndex+1
    };
    
    users.push(newUser);

    return newUser;

}  