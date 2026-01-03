const express = require('express');

const app =  express();

// app.use("/",(req,res) => {                          // will handle any request starting from '/' 
//     res.send("Hello from the Server !")
// })

app.use("/login",(req,res) => {                          // will handle any request starting from '/login' 
    res.send("Hey!!.. you are logged in")
})

app.use("/signup",(req,res) => {                          // will handle any request starting from '/signup' 
    res.send("Hey!!.. you are signed in")
})

app.listen(3000,()=>{
    console.log("server has been started successfully...")
});

