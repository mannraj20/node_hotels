const express =require("express")
const app =express();
const db=require("./db")


//const MenuItem =require("./model/menuItem")
const bodyParser =require("body-parser");
app.use(bodyParser.json());

const personroutes =require("./routes/personRoutes");
app.use("/person",personroutes);


/*app.post("/menu",async(req,res)=>{
    try{
       const data =req.body
       const newmenu =new MenuItem(data);
       const response = await newmenu.save();
       console.log("data saved");
       res.status(200).json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({msg:"internal server error"});
    }
})
app.get("/menu",async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:"internal server error"});
    }
})*/




app.listen(3001,()=>{
    console.log("listening on port3000");
});