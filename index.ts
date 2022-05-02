import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'

dotenv.config();

import mainRouter from './src/router/indexRouter';



const app: Express = express();
const port = process.env.PORT;

mongoose.connect('mongodb://localhost/Arus')
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error: '))

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(mainRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});