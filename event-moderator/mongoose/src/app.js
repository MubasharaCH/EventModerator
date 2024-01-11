
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/login")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("Failed")
})