const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt = require('bcryptjs');
const userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:[true,'please provide your name']
    },
    email:{
        type:String,
        required:[true,'please fill the email'],    
        lowercase:true,
        validate:[validator.isEmail,"please provide a valid email"]
    },
    password:{
        type:String,
        required:[true,"please provide password"],
        minlength: 8

    },
    passwordconfirm:{
        type:String,
        required:[true,"Please fill the confirm password"],
        
    },
    token:{
        type:String,
        require:false
    },
},{versionKey:false,timestamps: true});



    
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    this.password= await bcrypt.hash(this.password,10);

    this.passwordconfirm= undefined;
});


const user=mongoose.model("user",userSchema);

module.exports=user;