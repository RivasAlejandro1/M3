import "dotenv/config"

console.log(process.env.PORT)

export const PORT:  number = Number(process.env.PORT);
