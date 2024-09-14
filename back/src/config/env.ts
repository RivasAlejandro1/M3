import "dotenv/config"

console.log(process.env.PORT)

export const PORT:number = Number(process.env.PORT);
export const PASSWORD:string|undefined = process.env.PASSWORD;
export const DATABASE:string|undefined = process.env.DATABASE;
export const USERNAME:string|undefined = process.env.USERNAME;
export const PORT_DATABASE:number = Number(process.env.PORT_DATABASE);


