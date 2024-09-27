import express from 'express';
import  Connection  from './database/db.js';
import cors from "cors";
import bodyParser from 'body-parser';
import Route from "./routes/route.js";

const app=express();

app.use(cors());
app.use(bodyParser.json({extended:true}));// For reading req.body in serverside bcz it don't understand json without bodyparser then in controller it understan req.body to do opeation.
app.use(bodyParser.urlencoded({extended:true}));  // for url parsing like it remove space with another val run smothly
app.use('/',Route);

const PORT=8000;

Connection();

app.listen(PORT,()=>{console.log(`Server is running on Port:${PORT}`)})