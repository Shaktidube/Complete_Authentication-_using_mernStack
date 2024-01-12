const mongoose = require("mongoose");

const DB = "mongodb+srv://root:12345@shaktidb.6bkxevk.mongodb.net/AuthUser"
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("database connected")).catch((error)=>{console.log(error)})