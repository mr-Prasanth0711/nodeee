var express=require('express');
var app=express();
app.get('/',function(req,res)
{
res.send('This is my Fist Node Project!');
});
var server=app.listen(3000,function() {});