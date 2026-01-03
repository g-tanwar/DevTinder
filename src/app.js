const express = require('express');

const app =  express();

app.use("/test",(req,res) => {                          // will handle any request starting from '/test' 
    res.send("Hello from the Server !")
})

app.get("/user/:user_id",(req,res) =>{
    console.log(req.params);
    res.send({first_name:"Gourav", last_name:"Tanwar"})
})

app.delete("/user",(req,res) =>{
    res.send("user deleted successfully")
})
app.post("/user",(req,res) =>{
    console.log("Save data to the Database")
    res.send("Data saved Successfully to the database")
})
app.listen(3000,()=>{
    console.log("server has been started successfully...")
});

 