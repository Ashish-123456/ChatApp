import mongoose from "mongoose";

const ConversationSchema=new mongoose.Schema({
    members:{
        type:Array,
    },
    message:{
        type:String,
    }},
   {timestamps: true }
);

const conversation=new mongoose.model('Conversation',ConversationSchema);
export default conversation;

