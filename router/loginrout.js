const express=require('express');
const router=express.Router();

const login= require('../controller/login');




router.post("/",login.loginpage);

module.exports=router;