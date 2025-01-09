import dotenv from "dotenv"

dotenv.config({
    path:"./.env"
})
mongooseConnection().then(()=>{
    app.listen(process.env.PORT||5000,()=>{
        console.log(`Server is running at port :${process.env.PORT}`);
        
    })
}).catch((err)=>{
    console.log("MongoDB connection FAILED!!",err);
    
})