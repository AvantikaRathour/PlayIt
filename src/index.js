// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path:'./env'
})
connectDB();
;// const app=express();
// const connectDB=async ()=>{
//  try{
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//    app.on("error",(error)=>{
//     console.log("Error : ",error);
//     throw error;
//    })
//    app.listen(process.env.PORT,()=>{
//     console.log(`app is listening on ${process.env.PORT}`);
//    })
//  }catch(err){
//     console.log("Error : ",err);
//  }
// }
// connectDB();