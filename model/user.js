const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');
const cryptr=require('cryptr');
const customer=mongoose.Schema({
    Name:{
        type: String,
        require:true,
        minlength:[8,'name must have 8 characters'],
        unique:true

    },
    Email:{
        type:String,
        require:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
        unique:true
       
        
    },
    Mobileno:{
        type:Number,
        require:true,
        min:[10,'mobile number must be 10.'],
        unique:true
      
    },
    Password:{
        type:String,
        require:true

        

    }},{versionKey:false,timestamps: true});



// var enpass=cryptr.encrypt(this.Password);

// var decpass=cryptr.decrypt(enpass);


    // Encrpt the Password
       
    customer.pre('save', async function(next){
        if(!this.isModified('Password')){
            next();
        }
        this.Password= await bcrypt.hash(this.Password,10);
    });

    // bcrypt.genSalt(5, (err, Salt) => {
    //     bcrypt.hash(this.Password, Salt, (err, hash) => {
    //         if(err) {
    //             console.log('Error in generating salt: ' + err)
    //         }
    //         else {
    //             this.Password = hash
    //             this.saltString = Salt
    //             next()
    //         }
    //     })
    // })

module.exports=mongoose.model('login',customer);