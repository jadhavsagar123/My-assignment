const express=require("express");
const router=express.Router();
const {getData,saveData,updateOneData,deleteOneData}=require("../controllers/crud.controller");

router.get("/",getData);
router.post("/save",saveData);
router.put("/updateOne",updateOneData);
router.delete("/deleteOne/:id",deleteOneData);


module.exports=router;