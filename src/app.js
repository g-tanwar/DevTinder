const express = require('express');

const app =  express();

app.use("/user", (req,res,next) =>{
      // route handler

    console.log("Handling route here...")  
    next();
    res.send("Route Hnandler 1...");
    
},
(req,res) =>{
    console.log("2nd handler here")
    res.send("Route handler 2..");      
          // should never give a multiple router
}
);


app.listen(3000,()=>{
    console.log("server has been started successfully...")
});

  