import "dotenv/config"


export const PORT:number = Number(process.env.PORT);
export const PASSWORD:string|undefined = process.env.PASSWORD;
export const DATABASE:string|undefined = process.env.DATABASE;
export const INFOUSER:string|undefined = process.env.INFOUSER;
export const PORT_DATABASE:number = Number(process.env.PORT_DATABASE);


