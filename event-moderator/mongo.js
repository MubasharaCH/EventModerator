const mongoose=require("mongoose")
mongoose.connect("")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("Failed")
})