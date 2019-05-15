var router = require("express").Router();
const request = require('request');

router.get("/gallery",function(req,res){
    res.render("gallery");
});
module.exports = router;
