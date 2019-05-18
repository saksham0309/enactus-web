var router = require("express").Router();
const request = require('request');

router.get("/about",function(req,res){
    res.render("about");
});
module.exports = router;
