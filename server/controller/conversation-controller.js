import Conversation from "../model/Conversation.js";
import message from "../model/Message.js";

export const newConversation=async(req,res)=>{
    try{
        const senderId=req.body.senderId;
        const receiverId=req.body.receiverId;

        let exist=await Conversation.findOne({members:{$all :[receiverId,senderId]}});
        if(exist){
            // let val=await Conversation.findOne({members:{$all :[receiverId,senderId]}});
            
            return res.status(200).json('Conversation already exist');
         }
            const newConversation=await new Conversation({
            members:[senderId,receiverId],
        })
        await newConversation.save();
        return res.status(200).json('Conversation Established Successfully');
    }catch(error){
       return res.status(500).json(error.message);
    }
}

export const getConversation=async(req,res)=>{
    try{
        // Apicall. by post
        // const senderId=req.body.senderId;
        // const receiverId=req.body.receiverId;

        
        // api call by get
        const senderId=req.query.senderId;
        const receiverId=req.query.receiverId;

        let conversation=await Conversation.findOne({members:{$all :[receiverId,senderId]}});
        return res.status(200).json(conversation);
    }catch(error){
       return res.status(500).json(error.message);
    }
}