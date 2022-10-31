require('dotenv').config();
import 'express-async-errors';
import express from "express";
import { errorMiddleware } from './middlewares/error';
import {router} from "./rotas/rotas";

var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
app.use(router);
app.use(errorMiddleware);
app.listen(process.env.PORT || 6000, () => console.log("Server rodando"));
console.log(process.env.DATABASE_URL);
