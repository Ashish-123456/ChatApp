import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    iss:{
        type:String
    },
    rbf:{
        type:String
    },
    aud:{
        type:String
    },
    sub:{
        type:String,
        required:true
    },
    email_verified:{
        type:String
    },
    name:{
        type:String,
        required:true
    },
    given_name:{
        type:String,
    },
    picture:{
        type:String,
        required:true
    },
    family_name:{
        type:String,
    },
    iat:{
        type:Number,
    },
    exp:{
        type:Number,
    },
    jit:{
        type:Number,
    }
});

const user=new mongoose.model('user',userSchema);
export default user;