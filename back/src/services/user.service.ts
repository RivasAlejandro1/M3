import IUser from '../interfaces/IUser.interface';
const users =[
    {
        id: 1,
        name: "1"
    },
     {
        id: 2,
        name: "2"
    },
     {
        id: 3,
        name: "3"
    },
     {
        id: 4,
        name: "4"
    },
     {
        id: 5,
        name: "5"
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