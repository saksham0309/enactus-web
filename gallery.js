var router = require("express").Router();
const request = require('request');

var projects=[
    {
        name: 'Malar',
        id: 'malar',
        num: 16,
        path: '/images/event/Malar',
        cover: 16,
        start: "Aug 2016",

    },
    {
        name: 'Al',
        id: 'al',
        num: 4,
        path: '/images/event/al',
        cover: 2,
        start: "Aug 2016",

    },
    {
        name: 'Enactus India Fest',
        id: 'fest',
        num: 5,
        path: '/images/event/fest',
        cover: 2,
        start: "Aug 2016",

    },
    {
        name: 'Naari',
        id: 'naari',
        num: 21,
        path: '/images/event/Naari',
        cover: 2,
        start: "Aug 2016",

    },
    {
        name: 'Trad',
        id: 'trad',
        num: 11,
        path: '/images/event/trad',
        cover: 2,
        start: "Aug 2016",

    },
    {
        name: 'Diwali Mela',
        id: 'diwali',
        num: 10,
        path: '/images/event/ujwal',
        cover: 2,
        start: "Aug 2016",

    },
    {
        name: 'Project X',
        id: 'x',
        num: 29,
        path: '/images/event/X',
        cover: 2,
        start: "Aug 2016",

    }];

router.get("/gallery",function(req,res){
    res.render("gallery", {projects: projects,l:4});
});
module.exports = router;
