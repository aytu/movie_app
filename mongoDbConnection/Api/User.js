const express=require('express');
const User = require('../DB/User');
const route=express.Router();

route.post('/userModel', async (req,res)=>{
   const {firstName,lastName}=req.body;
   let user={};
   user.firstName=firstName;
   user.lastName=lastName;
   let userModel=new User(user);
   await userModel.save();
   res.json(userModel);
});

route.get('/users', async (req,res)=>{
    const users = await User.find()
    const txt='this is time '+ req.timeStamp;
    const resobj={
        users,
        txt
    };
    res.send(resobj);
    //res.send(users);
 });

 route.get('/users/:id', async(req,res)=>{
     try{
        const user=await User.findOne({_id:req.params.id});
        res.send(user);
     }
     catch{
        res.status(404);
        res.send({error:"this request is not responded"});
     }
    
 });
 route.patch('/users/:id', async(req,res)=>{
     try{
        const user= await User.findOne({_id:req.params.id});
        console.log(user);
        if(req.body.firstName){
            user.firstName=req.body.firstName;
        }
        if(req.body.lastName){
            user.lastName=req.body.lastName;
        }
        await user.save();
        res.send(user);
     }
     catch(err){
        res.status(404);
        res.send({error:"this not working"});
     }
 });

 route.delete('/users/:id',async(req,res)=>{
     try{
        await User.deleteOne({_id:req.params.id});
        res.status(204).send();
     }
     catch{
        res.status(404);
        res.send({error:"this not working"});
     }
 })

module.exports=route;