require('dotenv').config()
const app=require("./app");
const port=process.env.PORT || 9090;
const mongoose=require("mongoose");
const path =process.env.MONGO_URL

mongoose.connect(path).then(data=>{
    console.log("Mongodb connected")
}).catch(err=>{
    console.log(err);
})


app.listen(port,function(){
    console.log(`Server Running At Port ${port}`);
})