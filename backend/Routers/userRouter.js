const express = require('express');


const UserRouter = express.Router();


 
  UserRouter.get('/*',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,"build","index.html"));
 }) 
 exports.UserRouter=UserRouter;