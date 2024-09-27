// Error in uploadmiddleware
// TypeError: Cannot read properties of undefined (reading '_id')
//     at GridFSBucketWriteStream.emitFile (E:\PROJECTS\ChatApp\server\node_modules\multer-gridfs-storage\lib\gridfs.js:307:31)
//     at GridFSBucketWriteStream.emit (node:events:525:35)
//     at finish (node:internal/streams/writable:748:10)


const url="http://localhost:8000";
import mongoose from "mongoose";
import grid from "gridfs-stream";

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});


export const uploadFile=async(req,res)=>{
        if(!req.file){
            return res.status(404).json("File Not Found");
        }
        console.log("data in client:", req);
        const imageUrl=`${url}/file/${req.file.filename}`;
        
        return res.status(200).json(imageUrl);
}

export const getImage=async(req,res)=>{
    try {   
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(res);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}