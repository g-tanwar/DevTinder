const express = require('express');
const connectDB = require("./config/database")
const app =  express();
const User = require("./models/user");

app.post("/signup",async (req,res) =>{
    // const userObj = {
    //     firstName: "Subi",
    //     lastName: "ji",
    //     emailId:"subs@gmial.com",
    //     password:"suba@28"
    // }
    // const user = new User(userObj);                 // a new instance of user model created

    const user = new User({
        firstName: "Subi",
        lastName: "ji",
        emailId:"subs@gmial.com",
        password:"suba@28"
    }
    );  
    await user.save();

    res.send("User addded successfully")
})



connectDB().then(()=>{
    console.log("database connected successfully...")

    app.listen(3000,()=>{
        console.log("server has been started successfully...")
    });
    
}).catch((error) =>{
    console.error("could not connect database")
})


  