//request packet structure->Schema
const mongoose=require("mongoose");


const signup= new mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    dob:{type:String,required:true},
    name:{type:String,required:true}
});
var signupSchema=mongoose.model("userInfo",signup); //table name =>userInfo,collection name=>in url

const postDetailSchema= new mongoose.Schema({
    tripId:{type:String,required:true},
    vehicleId:{type:String,required:true},
    data:{type:String,required:true},
    extra:{type:String,required:false},
    status:{type:String,required:true},
    startTime:{type:String,required:false},
    endTime:{type:String,required:false}
});
var detailsSchema=mongoose.model("vehicleDetail",postDetailSchema); 
 

const lightSchema= new mongoose.Schema({
    status:{type:String,required:true}
});
var lightStatusSchema=mongoose.model("LightStatusDetail",lightSchema)

module.exports= {
    signupSchema:signupSchema,
    detailsSchema:detailsSchema,
    lightStatusSchema:lightStatusSchema
}

//login is a get api.