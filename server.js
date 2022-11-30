const express=require('express');
const app=express();
const mongoose=require('mongoose');
const router=require("./router/router");
const log=require("./router/loginrout");
const bodyparser=require('body-parser');
const sign=require("./router/sin")

app.use(bodyparser.json());


// To create a middelwear
app.use("/register",router);

app.use('/sin',sign);


app.use("/log",log);



app.get('/',(req,res)=>{
    res.send("server created");
});
app.listen(5000);


mongoose.connect("mongodb://localhost:27017/login",(err)=>{
    if (err) throw err;
    console.log("Database Created");
});


