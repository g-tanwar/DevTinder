const express = require('express');

const app =  express();

const {adminAuth,UserAuth} = require("./middlewares/auth")

// app.get("/getUserData",(req,res) =>{
//     throw new Error("Not Working");
//     res.send("User Data Sent")
// })

app.get("/getUserData",(req,res)=>{
    try{
    throw new Error("Not Working");
    res.send("User Data Sent");
    }catch(err){
        res.status(500).send("Something Went wrong")
    }
});

app.use("/",(err,req,res,next) =>{
    if(err){
        res.status(500).send("Something Went wrong")
    }
    res.send("hillo")
})



app.listen(3000,()=>{
    console.log("server has been started successfully...")
});

  