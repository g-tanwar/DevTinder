const express = require('express');
const connectDB = require("./config/database")
const app =  express();



connectDB().then(()=>{
    console.log("database connected successfully...")

    app.listen(3000,()=>{
        console.log("server has been started successfully...")
    });
    
}).catch((error) =>{
    console.error("could not connect database")
})


  