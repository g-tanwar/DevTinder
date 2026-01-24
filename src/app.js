const express = require('express');
const connectDB = require("./config/database")
const app =  express();
const User = require("./models/user");
const { model } = require('mongoose');

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
         res.send("User added successfully"); 
    }catch(error){
        res.status(400).send("Error saving the user:"+ error.message); 
    }
   
})

// Find user by email

app.get("/user",async (req,res)=> {

    const userEmail = req.query.emailId;

    console.log("Searching for:", userEmail);

    try{
         const user = await  User.find({ emailId: userEmail});

         res.send(user)

    }
    catch(err){
        res.status(400).send("Something went wrong")
    }
  
})


// Feed api - GET/feed - get all the users from the database
app.get("/feed", (req,res) =>{

})

connectDB().then(()=>{
    console.log("database connected successfully...")

    app.listen(3000,()=>{
        console.log("server has been started successfully...")
    });
    
}).catch((error) =>{
    console.error("could not connect database")
})


  