const express = require('express');
const { Validator } = require('node-input-validator');
const router = express.Router();


router.post('/',async function(req,res){

    try{
        const val = new Validator(req.body,{
            email: "required|email",
            password : "required",
            name: "required|string",
            age:"required|string"
       });
   
       // val.check().then((matched)=>{
       //     if(!matched){
       //         return res.status(422).json({
       //             status:"422",
       //             error: val.errors
       //         })
       //     }else{
       //         return res.status(200).json({
       //             "status":200,
       //             "message":"okk" 
       //         })
   
       //     }
       // })
      // Either this or 
      const matched = await val.check();
      if(!matched){
       return res.status(200).json({
           status : 422,
           error: val.errors
       })
      }
      else{
       return res.status(200).json({
           status:200,
           message:"ok"
       })
      }

    }
    catch(err){
        return res.status(404).json({
            status:404,
            message: "internal_error",
            error :err.message

        })

    }

    

    
});



module.exports = router;