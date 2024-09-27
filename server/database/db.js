import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const Password=process.env.DB_PASSWORD;
const UserName=process.env.DB_USERNAME;
const Connection=async()=>{
    try{
        await mongoose.connect(
            `mongodb+srv://${UserName}:${Password}@chat-app.jptqy.mongodb.net/Ashish`,
            {useUnifiedTopology:true});
        console.log("DataBase Connected Successfully");
    }catch(error){
        console.log("Error While Connecting DataBase",error.message);
    }
}

export default Connection;