var express = require("express");
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
app.use(rootRoute);
<<<<<<< HEAD
app.use(galleryRoute);
app.use(aboutRoute);
app.use(eventRoute);
app.use(projectRoute);
=======

>>>>>>> 012699b5d6b5693f968530b8f1739f8a05fb550f

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server is running");
}); 
