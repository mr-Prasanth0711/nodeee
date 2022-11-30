const user= require('./../model/userModel')
// const validator = require("fastest-validator")
const {validationResult}=require("express-validator")


exports.singup= async(req,res)=>{
    const errmsg= validationResult(req)

    if(!errmsg.isEmpty()){
        return res.status(400).json({
            errors:errmsg.array()[0].msg
        });


    }



    const newUser= await user.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        passwordconfirm:req.body.passwordconfirm
    });
          
    
          

    res.status(201).json({

        status:"Success",
        data:{

        user:newUser,

    },
    }); 
 
        

};

