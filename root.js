var router = require("express").Router();
const request = require('request');

router.get("/",function(req,res){
    res.render("index",{l:0});
});

router.get("/sitemap", function(req, res) {
  res.render("sitemap");
});

module.exports = router;
