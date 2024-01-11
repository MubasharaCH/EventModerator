const mongoose=require('mongoose')
const dotev=require('dotenv')
const express =require('express');

const app=express();


dotev.config({path:'./config.env'})
require('./db/conn')
const User=require('./model/userSchema')

app.use(express.json());
//Routing Links
app.use(require('./router/auth'));

//port after routing
const PORT=process.env.PORT;
//Middleware
//const middleware=(req,res,next)=>{
 //console.log('hi middleware')
// next();
//}


//app.get('/',(req,res)=>{
 //res.send('Hello World from Server app js')
//})
app.get('/signup',(req,res)=>{
    res.send('Hello signup from Server')
   })
//app.get('/profile',middleware,(req,res)=>{
   // res.cookie('text','mee');
   // res.send('Hello profile from Server')
  // })
   app.get('/login',(req,res)=>{
    res.send('Hello login  from Server')
   })
app.listen(PORT,()=>{
    console.log('running server on port ${PORT}')
})