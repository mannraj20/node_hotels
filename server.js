const express =require("express")
const app =express();
const db=require("./db")
const Person =require("./model/person");

const passport =require("passport");
const LocalStrategy =require("passport-local").Strategy;

//const MenuItem =require("./model/menuItem")
const bodyParser =require("body-parser");
app.use(bodyParser.json());

/*const logRequest =(req,res,next)=>{
    console.log(`[${new Date().toLocaleString()}] Request made to :${req.originalUrl}`)
    next();
}
app.use(logRequest);*/

passport.use(new LocalStrategy(async(USERNAME,password,done)=>{
    try{console.log =("recieved credentials",USERNAME,password);
const user =await Person.find({username:USERNAME});
if(!user)
return done(null,false,{msg:"incorrect username"});
const isPasswordMatch =user.password===password?true:false;
if(isPasswordMatch){
    return done(null,user);

}else{
    return done(null,false,{msg:"incoorect password"});
}
    }catch(err){
return done(err);
    }
}

))
app.use(passport.initialize());
const localAuthMiddleware =passport.authenticate("local",{session:false});
app.get("/",function(req,res){
    res.send("welcome to hotel")
})
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