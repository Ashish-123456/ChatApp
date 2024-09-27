import Message from "../model/Message.js"
import Conversation from "../model/Conversation.js";

export const newMessage=async(req,res)=>{
    try{
        const newMessage=new Message(req.body);
        await newMessage.save();
        // console.log("newMessage",newMessage);
        await Conversation.findByIdAndUpdate(req.body.conversationId,{message:req.body.text});
        return res.status(200).json('Message has been saved');
    }catch(error){
        return res.status(500).json(error.message);
    }
}

export const getMessage=async(req,res)=>{
    // console.log("req.params",req.params);
    try{
        const message=await Message.find({conversationId:req.params.id});
        // console.log("mess in getmess",req.params.id,message);
        return res.status(200).json(message);
    }catch(error){
        return res.status(500).json(error.message);
    }
}
