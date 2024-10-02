import express from 'express';
import router from './routes/index';
const cors = require("cors");

const server =  express();

server.use(express.json());
server.use(cors());
server.use(router);

export default server;