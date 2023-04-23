const express = require('express');
const app = express();
const bodyParser= require('body-parser');

//parse application/json
app.use(bodyParser.json());

// PUBLIC ACCESS API
const publicAccess_API = require('./routes/public_access');
app.use('/public',publicAccess_API);

// PRIVATE ACCESS API

const privateAccess_API = require('./routes/private_access');
app.use('/private',privateAccess_API);





// const addBookController = require('./post_add');
// app.use('/book',addBookController); 
// use is when we have ek ke andar ek content



app.listen(3000);