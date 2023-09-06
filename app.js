const express = require('express');

const app = express();

app.get("/",(req,res)=>{
    res.send("hello from server");
})

app.get("/",(req,res)=>{
    res.send("this is the about page");
})

app.listen(5000,()=> (
    console.log("server running at 5000")
));