var express = require("express");
var rootRoute = require('./root');
var galleryRoute = require('./gallery');
var aboutRoute = require('./aboutus');
var eventRoute = require('./event');
var projectRoute = require('./project');
const bodyParser = require("body-parser");
var mysql = require('mysql');


var app = express();

// =================
// App configuration
// =================
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//app.use(bodyParser.json());

// Routes
app.use(rootRoute);
app.use(galleryRoute);
app.use(aboutRoute);
app.use(eventRoute);
app.use(projectRoute);

app.listen(process.env.PORT || 5000, process.env.IP, function(){
	console.log("Server is running");
}); 
