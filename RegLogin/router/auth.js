const express=require('express');
const bcrypt=require('bcryptjs'); 
const jwt=require('jsonwebtoken');
const router=express.Router();
const cookieParser = require('cookie-parser')
const authenticate=require('../middleware/authenticate')
require('../db/conn')
const { MongoClient } = require("mongodb");
const DB=process.env.DATABASE;
const User = require('../model/userSchema');
const client =new MongoClient(DB)
router.use(cookieParser())
router.get('/',(req,res)=>{
    res.send('Hello World from Server router js')
   });
 router.post('/register', async (req,res)=>{
  const {email,password}=req.body;
  if(!email || !password){
    return res.status(422).json({error:"plz fill data"})
  }
try{
  const userExist= await User.findOne({email:email});
  if(userExist){
    return res.status(422).json({error:"User already exist"})
  }
   const user= new User({email,password});
   await user.save()
   res.status(201).json({message:"User Register successfull"})
  
}
catch(err){
console.log(err)
}

 }) 
 //login route
router.post('/signin', async(req,res)=>{
 
 try{
  let token;
 const {email,password}=req.body
 if(!email||!password){
  return res.status(400).json({error:"Please fill the data"})
 }
 const userlogin= await User.findOne({email:email});
 if(userlogin){

  const ismatch= await bcrypt.compare(password,userlogin.password)
 token= await userlogin.generateAuthToken();
   //token= await ismatch.generateAuthToken();
     console.log(token)

     res.cookie("jwtoken",token,{
      expires:new Date(Date.now()+ 25892000000),
      httpOnly:true
     })
    if(!ismatch){
   res.status(400).json({error:"Invalid Credentials ps"});
    }else{
   res.json({message:"User Successfully Login"});
     }
 }else{
  res.status(400).json({error:"Invalid Credentials"});
 }

 } 
 catch(err){
 console.log(err)
 }
})
router.get('/dashbord', authenticate,(req,res)=>{
  res.send(req.rootUser);
})

//user dashboard
router.get('/profile',authenticate,(req,res)=>{
  res.send(req.rootUser);
 });
 router.post('/dashbord', authenticate, async (req,res)=>{
 try{
const {fname,lname,phone,vname,vcategory,address,state,wtreval}=req.body
if(!fname|| !lname || !phone ||!vname || !vcategory|| !address ||!state ){
 console.log('data not filled')
 return res.json({error:"please filled the all contant"}) 
}

const userInfo= await User.findOne({_id:req.userID})
 if(userInfo){
  const userInformation= userInfo.addinformation(fname,lname,phone,vname,vcategory,address,state,wtreval)
  await userInfo.save();
  res.status(200).json({message:"user information "})

 }
 }
 catch(err){
  console.log(err)
 }
})
router.post('/udashbord', authenticate, async (req,res)=>{
  try{
 const {fname,lname,phone,vname,vcategory,address,state,wtreval}=req.body
 if(!fname|| !lname || !phone ||!vname || !vcategory|| !address ||!state ){
  console.log('data not filled')
  return res.json({error:"please filled the all contant"}) 
 }
 
 const userInfo= await User.findOne({_id:req.userID})
  if(userInfo){
  const body=req.body
 const user= User.updateOne({_id:userInfo},body ,{"fname":fname,"lname":lname,"phone":phone})
 if(user){
 res.json({message:'successful'})
 //res.json(user)
 }
  




  }
  else{
    return res.status(400).json({message:"user not found"})
  }
  }
  catch(err){
   console.log(err)
  }
 })
router.get('/logout',(req,res)=>{
  console.log('logout ')
  res.clearCookie('jwtoken',{path:'/'})
  res.status(200).send('This is logout page')
 });

   module.exports=router;