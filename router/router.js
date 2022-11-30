// const login=require('./model/user');
const login=require("../model/user")
const express=require('express');
const router=express.Router();



// Requiring module


router.get('/',(req,res)=>{
    res.send("first page");
});

// router.get('/next',(req ,res)=>{
//     res.send("welcome to next page");
// });




router.post('/sri',async(req,res)=>{
   
    console.log("hfug")
var data =new login({
    Name:req.body.Name,
    Email:req.body.Email,
    Mobileno:req.body.Mobileno,
    Password:req.body.Password
});
await data.save();

res.send(data);

console.log(data);
});




  

module.exports=router;


