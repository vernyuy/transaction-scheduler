import { startScheduler } from './tasks/schedular';
import dotenv from 'dotenv';

import express, { Request, Response, Application } from 'express';
import bodyParser from "body-parser";
import cors from "cors";

// Load environment variables from .env file
dotenv.config();

// Start the scheduler
startScheduler();

const app = express();


app.use(bodyParser.json());
const origin = {
  origin: "*",
};
app.use(cors(origin));
const port = 8282;

app.use('/api', ()=>{});
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
