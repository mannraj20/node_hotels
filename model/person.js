const mongoose= require("mongoose");
const personSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true 
    },
    work:{
        type:String,
        enum:["chef" ,"manager","waiter" ],
        required:true
    },
    mobile:{
    type:String,
    required:true,
    },
    email:{
        type:String,
    required:true,
    unique:true
    },
    address:{
type:String,
required:true
    },
    salary:{
        type:Number,
        required:true,

    },
    username:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true
    }
});

const Person = mongoose.model("Person",personSchema);
module.exports = Person;