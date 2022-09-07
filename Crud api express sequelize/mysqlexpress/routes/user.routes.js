const express=require("express");
const router=express.Router();
const {insertIntoDb,selectAllData, searchData,updateData,deleteData} =require("../db");



router.post("/",function(req,res){

    insertIntoDb(req.body).then(data=>{
        
        console.log(data);
        res.json({
            messsage:"User Created"
        })
    }).catch(err=>{
        console.log(err);
        res.json({
            messsage:"Error"
        })

    })

})

router.get("/data",function(req,res){
   
    selectAllData().then(result=>{
        res.json({
            message:"Success",
            data:result
        })

    }).catch(err=>{
        res.send(err);

    })
  
})


router.put("/data",function(req,res){
    const name=req.query.name
    searchData(name).then(result=>{
        res.json({
            message:"Success",
            data:result
        })

    }).catch(err=>{
        res.send(err);

    })
  
})

router.put("/updateData",function(req,res){
    updateData(req.body).then(result=>{
        res.json({
            message:"Successfully Updated",
            data:result
        })

    }).catch(err=>{
        res.send(err);

    })
  
})



router.delete("/data/:id",function(req,res){
    deleteData(req.params.id).then(result=>{
        res.json({
            message:"SuccessFully deleted",
            result
        })  
    
    }).catch(err=>{
            console.log(err)
            res.send(err);
        })
    })






module.exports=router;