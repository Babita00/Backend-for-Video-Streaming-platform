import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB=async()=>{
    try {

        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB connected !! Host:${connectionInstance.connection.host}`);
        
        
    } catch (error) {
        console.log("MongoDB connection ERROR:",error);
        process.exit(1)
        
        
    }
}