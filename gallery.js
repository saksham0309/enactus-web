var router = require("express").Router();
const request = require('request');
var mysql = require('mysql');

const fetch = require('node-fetch');


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

router.get("/gallery",async function(req,res){



     const response1=await fetch('https://keplerian-bypass.000webhostapp.com/admin/fetch_adv.php')
       const adv=await response1.json();
       const response2=await fetch('https://keplerian-bypass.000webhostapp.com/admin/fetch_cre.php')
       const cre=await response2.json();
       const response3=await fetch('https://keplerian-bypass.000webhostapp.com/admin/fetch_fin.php')
       const fin=await response3.json();
       const response4=await fetch('https://keplerian-bypass.000webhostapp.com/admin/fetch_hr.php')
       const hr=await response4.json();
       const response5=await fetch('https://keplerian-bypass.000webhostapp.com/admin/fetch_mns.php')
       const mns=await response5.json();

            //console.log(r1);
            res.render("gallery", {projects: projects,l:4,adv:adv,cre:cre,fin:fin,hr:hr,mns:mns});

          });





module.exports = router;
