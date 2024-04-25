const mongoose =require("mongoose");
const { boolean } = require("webidl-conversions");
const menuItemSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    taste:{
        type:String,
        enum:["sweet","spicy","sour"],
        required:true,
    },
    is_drink:{
        type:boolean,
        default:false,
    },
    ingredients:{
        type:[String],
        default:[],
    },
    num_sales:{
        type:Number,
        default:0,

    },
   
})
const MenuItem = mongoose.model("MenuItem",menuItemSchema);
module.exports = MenuItem;