const mongoose=require('mongoose');
const bcrypt=require('bcryptjs') 
const jwt=require('jsonwebtoken');
const userSchema=mongoose.Schema({
 email:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 },

information: [
   {
      fname:{
         type:String,
        
      },
      lname:{
         type:String,
       
      },
      phone:{
         type:Number,
      
      },
      vname:{
         type:String,
       
      },
      vcategory:{
         type:String,
         
      },
      address:{
         type:String,
        
      },
      state:{
         type:String,
    
      },
      wtreval:{
         type: String, 
      },
   }
 ],
 tokens: [
   {
      token:{
         type:String,
         //required:true
      }
   }
 ]


})

//hashing passwod
 userSchema.pre('save', async function(next){
  if(this.isModified('password')){
   this.password= await bcrypt.hash(this.password,12);
  }
  next();
 });
//token generate function

userSchema.methods.generateAuthToken = async function(){
   try{
  let token=jwt.sign({_id: this._id},process.env.SECRET_KEY);
     this.tokens= this.tokens.concat({ token:token });
    await this.save();
    return token;
   }catch(err){
      console.log(err)
   }

}
userSchema.methods.addinformation = async function(fname,lname,phone,vname,vcategory,address,state,wtreval){
   try{
 this.information=this.information.concat({fname,lname,phone,vname,vcategory,address,state,wtreval})
 await this.save();
 return information;
   }catch(err){
      console.log(err)
   }

}


 const User=mongoose.model('USER',userSchema);

module.exports = User;
