const express = require('express');

const app =  express();

const {adminAuth,UserAuth} = require("./middlewares/auth")

app.use("/admin",adminAuth);
app.use("/user",UserAuth);

app.get("/admin/getAllData" ,(req,res,next) =>{
    // logic of getting data
    res.send("All data send")
})

app.post("/user/login",(req,res) =>{
    res.send("User logged in Successfully")
});
app.delete("/admin/deleteTheUser",(req,res,next) =>{
    // logic of deleting the user

    res.send("User deleted Successfully")
})


app.listen(3000,()=>{
    console.log("server has been started successfully...")
});

  