
// const login=require("../model/user")



const express=require('express');
const router=express.Router();

const authUser= require('../controller/authUser');


const {check}=require("express-validator");







router.get("/",(req,res)=>{
    res.send("created the signup")
})

router.post("/",[
    check('name','name should be 6 character').isLength({min:6}),
    check('email','email not valid').isEmail().isLength({min:10,max:40}),
    check('password','password should be satisfy the rule').isLength({min:8}).matches("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"),
    check('passwordconfirm').custom((value,{req})=>{
       if (value!==req.body.password){
        throw new Error('password must be match');
       }
       return true
    })
    

],authUser.singup);

module.exports=router