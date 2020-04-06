const express= require("express");

const route=express.Router();

const controller=require("../Controller/controller");
const {createValidationFor, checkValidationResult}=require("../Validation/index");

route.post("/register",createValidationFor('signup'), checkValidationResult,controller.signup);
route.post("/login", createValidationFor('login'), checkValidationResult, controller.login);
route.post("/getDetails", createValidationFor('getDetails'), checkValidationResult, controller.getDetails);
route.post("/postDetails", createValidationFor('postDetail'), checkValidationResult, controller.postDetails);
route.post("/:id/turnLight", createValidationFor('lightStatus'), checkValidationResult, controller.lightUpdate);
route.post("/lightSave",createValidationFor('lightStatus'), checkValidationResult, controller.lightSave);
route.get("/:id/getLightStatus", controller.getLightStatus);
route.get("/:id/getLSDevice", controller.getDetailsForDevice);


module.exports={route};