import User from "../model/User.js";


export const addUser=async(req,res)=>{
    try{
       let exist=await  User.findOne({sub:req.body.sub});
       if(exist){
        res.status(200).json({message:"User Already Exist"});
        return ;
       }
       const newuser=await User(req.body);
       await newuser.save();
       return res.status(200).json(newuser);

    }catch(error){
        return res.status(500).json(error.message);
    }
}

export const getUsers=async(req,res)=>{
    let users=await User.find({});
    try{
        return res.status(200).json(users)
    }catch(error){
        return res.status(500).json(error.message);
    }
}