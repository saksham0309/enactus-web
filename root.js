var router = require("express").Router();
const request = require('request');

router.get("/",function(req,res){
    res.render("index",{l:0});
});



module.exports = router;
