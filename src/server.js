import dotenv from "dotenv"
import {connectDB} from './db/connectDB.js';
import { app } from "./app.js";
dotenv.config({
    path:"./.env"
})
connectDB().then(()=>{
    app.listen(process.env.PORT||5000,()=>{
        console.log(`Server is running at port :${process.env.PORT}`);
        
    })
}).catch((err)=>{
    console.log("MongoDB connection FAILED!!",err);
    
})