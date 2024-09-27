import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();

const Password=process.env.DB_PASSWORD;
const UserName=process.env.DB_USERNAME;

let storage = new GridFsStorage({
    url: `mongodb+srv://${UserName}:${Password}@chat-app.jptqy.mongodb.net/Ashish`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];
        
        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;
        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 