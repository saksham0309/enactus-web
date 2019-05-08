var router = require("express").Router();
const request = require('request');

router.get("/",function(req,res){
    res.render("index");
});

router.get("/about",function(req,res){
    res.render("index");
});

router.get("/gallery",function(req,res){
    res.render("index");
});

router.get("/projects",function(req,res){
    res.render("index");
});

router.get("/events",function(req,res){
    res.render("index");
});



module.exports = router;
