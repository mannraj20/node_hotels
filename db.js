const mongoose=require("mongoose");
const mongoURL="mongodb+srv://mannrajsinghjhala20:hanuman1234@cluster0.1ddr40r.mongodb.net/"
mongoose.connect(mongoURL,{
useNewUrlParser:true,
useUnifiedTopology:true
})
const db =mongoose.connection;
db.on("connected",()=>{
    console.log("mongodb server is connected");
});
db.on("disconnected",()=>{
    console.log("mongodb server is disconnected");
});
module.exports =db;