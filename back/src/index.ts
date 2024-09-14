import server from "./server";
import { PORT } from "./config/env";
import "reflect-metadata";
import {AppDataSource } from './config/appDataSource'

AppDataSource.initialize()
    .then(async ()=>{
        server.listen(PORT || 3000, ()=>{
            console.log(`Server listening on port ${PORT? PORT : 3000}`)
            
        })

    })