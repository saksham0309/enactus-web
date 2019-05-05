var express = require("express");
var rootRoute = require('./root');
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

app.listen(3000, function () {
    console.log("Server has started!");
     });
