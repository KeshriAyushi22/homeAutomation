const express=require("express");
const exOb=express();
const bodyParser=require("body-parser");
const morgan=require("morgan");
const mongoose=require("mongoose");
validator=require("express-validator");

const dotEnv=require("dotenv");
dotEnv.config();

const port=process.env.PORT;

mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser:
    true })
.then(()=>console.log("connected"))

mongoose.connection.on('error',err=>{
console.log(err);
});

exOb.use(bodyParser.json());
exOb.use(morgan("dev"));
const {route}=require("./Router/router");
exOb.use("/",route);


exOb.listen(port,()=>{
    console.log('listening to the port:'+port);
});

   