const user= require('./../model/userModel')
const bcrypt = require('bcryptjs');
const jwt=require("jsonwebtoken");
const { db } = require('../model/user');
// const user = require('../model/user');

exports.loginpage= async (req,res)=>{
    const {email,password}= req.body;
    let check= await user.findOne({ email: req.body.email,})
    const login=async(check)=>{
        let con_pass= await bcrypt.compare(password,check.password);
        if(con_pass==true){
           
           const token = jwt.sign({ _id: check._id }, 'PrivateKey');
           res.send("success")
           console.log(token);
           db.collection('users').updateOne({ _id: check._id }, { $set: { "token": token } });
            // user.Save();
        }
        else{
             return res.status(400).json({
            errors:"plz check the password"

        })
        }

    }
    if(check){
        login(check)
        //  return res.status(200).json({
        //     status:"email is found"
        //  })
        return
    }else{ 
        
        return res.status(400).json({
        errors:"mail id is not found"

    })
    
}}
