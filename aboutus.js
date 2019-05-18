var router = require("express").Router();
const request = require('request');

var advMembers = [{
    name: "John Doe",
    desg: "President",
    desc: "bla  bka bla",
    photo: "johndoe"
},
{
    name: "Jane Doe",
    desg: "Vice President",
    desc: "bla  bka bla",
    photo: "janedoe"
}];

var finMembers = [{
    name: "Anshul",
    desg: "President",
    desc: "bla  bka bla",
    photo: "johndoe"
},
{
    name: "Anshul",
    desg: "Vice President",
    desc: "bla  bka bla",
    photo: "janedoe"
}];

var creMembers = [{
    name: "Anshul",
    desg: "President",
    desc: "bla  bka bla",
    photo: "johndoe"
},
{
    name: "Anshul",
    desg: "Vice President",
    desc: "bla  bka bla",
    photo: "janedoe"
}];

var hrMembers = [{
    name: "Anshul",
    desg: "President",
    desc: "bla  bka bla",
    photo: "johndoe"
},
{
    name: "Anshul",
    desg: "Vice President",
    desc: "bla  bka bla",
    photo: "janedoe"
}];

var mnsMembers = [{
    name: "Anshul",
    desg: "President",
    desc: "bla  bka bla",
    photo: "johndoe"
},
{
    name: "Anshul",
    desg: "Vice President",
    desc: "bla  bka bla",
    photo: "janedoe"
}];

router.get("/about", function (req, res) {
    res.render("aboutus",{advMembers:advMembers,finMembers:finMembers, mnsMembers:mnsMembers, hrMembers:hrMembers, creMembers: creMembers});
});

router.get("/about/adv",function(req,res){
    res.end(JSON.stringify(advMembers));
});

router.get("/about/fin",function(req,res){
    res.end(JSON.stringify(finMembers));
});

module.exports = router;