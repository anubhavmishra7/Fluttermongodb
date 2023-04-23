const express= require('express');
const app = express();
const bodyParser= require('body-parser');




//for passing something inside body 
app.use(bodyParser.json());

app.get('/',function(req,res){
    return res.json(
        {
            //you can get what you entered in params in postman
            "params_id": req.query.id,
            "params_name":req.query.name
        }
    );
//    return res.send("Hellooo hehe");
});


app.get('/:userid',function(req,res){
    return res.status(200).json(
        {
          "status":200,
          "ok":req.params.userid
          
        }
    );
//    return res.send("Hellooo hehe");
});




app.post('/profile',function(req,res){
   console.log(req.body);
   return res.json(
    {"req_name":req.body.name, "req_header": req.headers.api_key}
   );
//     return res.json({
//     "name":"zee",
//     "age":"18",
//     "user_id" :1,
//     "is_active": true,
//     "more_details":{
//         "father_name":"Nkm"

//     }
//    });
});

app.get('/profile',function(req,res){
    return res.status(404).json({
        "status": 200,
        "message":"not valid request"
    })
});

app.listen(3000);