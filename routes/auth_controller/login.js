const express = require('express');
const router  = express.Router();

router.get('/',function(req,res)
{
    return res.status(200).json({
        "status":200,
        "message":"ok"
    })

});
 module.exports = router;