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
         const user = await  User.findOne({ emailId: userEmail});

         if(!user){
            res.status(404)/send("User not found")
         }else{
            res.send(user)
         }
         

    }
    catch(err){
        res.status(400).send("Something went wrong")
    }
  
})


// Feed api - GET/feed - get all the users from the database
app.get("/feed", async (req,res) =>{
    try{
        const users = await User.find({});
        res.send(users);

    }catch(err){
        res.status(400).send("Something went wrong")
    }
})

app.get("/byId",async (req,res)=> {
    try{
        const user = await User.findById("697548fcb0ed44d55222833e")
        res.send(user)
    }catch(err){
        res.status(404).send("Id is not correct")
    }
})

//deleting the user by it's id 

app.delete("/user", async(req,res)=>{

    const userId = req.body.userId;
    try{
        // const user = await User.findByIdAndDelete({_id: userId})
        const user = await User.findByIdAndDelete(userId)

        res.send("user deleted successfully")
    
    }catch(err){
        res.status(404).send("Id is not correct")
    }
})

// updatting the user data 
app.patch("/user", async (req, res) => {
    const userId = req.body.userId;
    const data = req.body;
  
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        data,
        {
          returnDocument: "after",
          runValidators: true
        }
      );
  
      if (!user) {
        return res.status(404).send("User not found");
      }
  
      res.send("User updated successfully");
    } catch (err) {
      res.status(400).send("Something is wrong: " + err.message);
    }
  });
  

connectDB().then(async ()=>{
    console.log("database connected successfully...")
    
    // Keep only this:
    await User.createIndexes();

    
    app.listen(3000,()=>{
        console.log("server has been started successfully...")
    });
    
}).catch((error) =>{
    console.error("could not connect database")
})