const express = require('express');
const connectDB = require("./config/database")
const app =  express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup",async (req,res) =>{

    // console.log(req.body);

    // const userObj = {
    //     firstName: "Subi",
    //     lastName: "ji",
    //     emailId:"subs@gmial.com",
    //     password:"suba@28"
    // }
    // const user = new User(userObj);                 // a new instance of user model created

    const user = new User(req.body
    );  
    try{
         await user.save();
    }catch(error){
        res.status(400).send("Error saving the user:"+ error.message); 
    }
   

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


  