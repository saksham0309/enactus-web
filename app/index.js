var express = require("express");
const serverless = require('serverless-http');
var rootRoute = require('./root');
var galleryRoute = require('./gallery');
var aboutRoute = require('./aboutus');
var eventRoute = require('./event');
var projectRoute = require('./project');
const bodyParser = require("body-parser");
var app = express();

// =================
// App configuration
// =================
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//app.use(bodyParser.json());

// Routes
var router = require("express").Router();

router.get("/",function(req,res){
    res.render("index",{l:0});
});
// app.use(rootRoute);
app.use(galleryRoute);
app.use(aboutRoute);
app.use(eventRoute);
app.use(projectRoute);

app.use('/.netlify/functions/server', router); // path must route to lambda

// app.listen(process.env.PORT || 5000, process.env.IP, function(){
// 	console.log("Server is running");
// }); 
module.exports = app;
module.exports.handler = serverless(app);