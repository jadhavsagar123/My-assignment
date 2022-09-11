const express=require("express");
const router=express.Router();
const fs = require('fs')
const File = require("../models/file");
const cloudinary = require('cloudinary').v2;


cloudinary.config({ 
    cloud_name: "dekbzsyco",
    api_key: "112136935553128",
    api_secret: "QktirvnUEUnYsnRqmo3jQlZAi3Y",
    secure: true
  });

  const multipart = require('connect-multiparty');
const  multipartMiddleware = multipart({ uploadDir: "./uploads" });


router.get("/",function(req, res) {
    File.find()
      .then((data) => {
        res.json({
          message: "Success",
          data: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })

  router.post("/filecloudinary",multipartMiddleware,function(req,res){


    cloudinary.uploader.upload(req.files.file.path,
     function(error, result) {
      
        if(error){
            res.json({
                message:"Error",
                error:error
            })

            return;
        }

       
/*
        res.json({
            message:"File Uploaded",
            fileName:result.url
               
        })*/
       
        const file = new File({
            title: req.body.title,
            description: req.body.description,
            file: result.url,
          });
        
          file.save()
            .then((resu) => {
              res.json({
                message: "Success",
                data: resu,
              });
            })
            .catch((err) => {
              console.log(err);
            });

            fs.unlinkSync(req.files.file.path);
    });

    

})




module.exports=router;