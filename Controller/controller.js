
const models= require("../Model/dbModel");
const {validationFun}=require("../Validation/index");
const { check, validationResult } = require('express-validator');

const signup=(req,res)=>{  
//signup mae req ayega th ,signupSchema ka obj create krnge and validate krnge model mae then save.
const data=models.signupSchema(req.body);
data.save()
.then(result =>{
    res.status(200).json({
        data:result,
        "resCode":"0000",
        "resStatus":"Registration Successful"
    })
})

};

//for login:post api-> but we didnt wanted to make a new table so signup schema se find krna h.

const login=(req,res)=>{
    console.log(req);
  
    models.signupSchema.findOne(req.body).then((msg,err)=>{  

        if(err) 
         res.json({"resCode":"0001",
         "resStatus":"failure",
          "resMsg":err})
       res.status(200).json({
           "resCode":"0000",
           "resStatus":"Success",
           "resMsg":msg
       })  
    });
}

const postDetails=(req,res)=>{ 
const data=models.detailsSchema(req.body);
data.save()
.then(result =>{
    res.status(200).json({
        "resCode":"0000",
        "resStatus":"Data Successfully stored"
    })
})

};

const getDetails=(req,res)=>{
    console.log(req);
  
    models.detailsSchema.find(req.body).then((msg,err)=>{  

        if(err) 
         res.json({
             "resCode":"0001",
         "resStatus":"failure",
          "resMsg":err})
       res.status(200).json({
           "resCode":"0000",
           "resStatus":"Success",
           "resMsg":msg
       })  
    });
}

const lightSave=(req,res)=>{ 
    const data=models.lightStatusSchema(req.body);
    data.save()
    .then(result =>{
        res.status(200).json({
            "resCode":"0000",
            "resStatus":"Data Successfully stored"
        })
    })
    
    };

const lightUpdate=(req,res)=>{
    console.log(req);
  
    models.lightStatusSchema.findByIdAndUpdate(req.params.id,
        {$set:req.body},{new: true}).then((msg,err)=>{  

        if(err) 
         res.json({
            "resCode":"0001",
            "resStatus":"failure",
             "resMsg":err})
             if( msg.status!=""){
                res.status(200).json({
                 "resCode":"0000",
                 "resStatus":"updated data succesfully!",
                 "data": msg
             })  
            }else {
              res.json({"resCode":"0001",
              "resStatus":"failure",
               "resMsg":"null data in db"})  
            } 
    });
}

const getLightStatus=(req,res)=>{
    models.lightStatusSchema.findById(req.params.id).then((msg,err)=>{  

        if(err) 
         res.json({"resCode":"0001",
         "resStatus":"failure",
          "resMsg":err})
        if( msg.status!=""){
          res.status(200).json({
           "resCode":"0000",
           "resStatus":"data in db!",
           "data": msg
       })  
      }else {
        res.json({"resCode":"0001",
        "resStatus":"failure",
         "resMsg":"null data in db"})  
      }
    });
}


const getDetailsForDevice=(req,res)=>{
    models.lightStatusSchema.findById(req.params.id).then((msg,err)=>{  

        if(err) 
         res.json({"resCode":"0001",
         "resStatus":"failure",
          "resMsg":err})
        if( msg.status!=""){
          res.status(200).json({
           "resCode":"0000",
           "resStatus":"data in db!",
           "status": msg.status
       })  
      }else {
        res.json({"resCode":"0001",
        "resStatus":"failure",
         "resMsg":"null data in db"})  
      }
    });
}



module.exports={signup,login,postDetails,getDetails,lightUpdate,getLightStatus,lightSave,getDetailsForDevice};

