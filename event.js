var router = require("express").Router();
const request = require('request');
var event=[
{date:'25 july 2017',
name:'TRAD',
url:"/images/event/trad/1.jpg",
desc1:'Belief is an important aspect of life and we in improving the world through the smallest of efforts. National volunteering week was one such opportunity to do our bit for the society. We decided to address one of the major problems of our generation - lack of awareness regarding traffic rules and safe conduct on the road. In order to do that we conducted the Traffic Rules Awareness Drive, also known as T.R.A.D . Rules and regulations form a basic part of our living and their presence ensures our safety and well being.',
desc2:'We divided ourselves into two groups to assemble at both the Mambakkam and Navalur Signals. Groups of Enactus rangers traversed at a safe distance near the junction with banners and posters displaying catchy messages and captions. The other group of rangers went around distributing small tokens (such as bookmarks or pens which had traffic awareness rules printed on it). In addition to this we assisted non-vehicular commuters to commute in busy traffic by helping them cross the road, asking them about the problems they faced in everyday traffic for ideas on improving road safety and also enlightened them on the necessity of road safety.',
desc3:'We aimed at letting the public know about various safety measures which should be be taken while driving a vehicle or as a pedestrian or while commuting in general. We focused on informing the local populus about the importance of road safety using placards and communicating with the travelers. The primary objective of T.R.A.D was to spread awareness about the staggering number of road accidents happening in our nation and make people realise the difference simple changes in habits can bring about.',
desc4:'But in spite of the warnings and mishaps that happen, people still choose to remain ignorant. Our efforts were also a contribution to the National Volunteering Week that is held every year in the month of January to address an integral part and problem in the lives of each and every Indian citizen – traffic rules and its lack of awareness. The chief traffic signals around our college (Kelambakkam, Vandalur and OMR road areas) were targeted during the peak traffic hours, where our volunteers demonstrated the importance of following traffic rules to pedestrians and drivers using banners/placards, posters and several other means.'
},
{

    date:'26 july 2017',
    name:'Diwali Mela',
    url:"/images/event/ujwal/1.jpg",
    desc1:'h1i',
    desc2:'h1i',
    desc3:'h1i',
    desc1:'h1i'

}


];
router.get("/events/:id",function(req,res){
    res.render("event_detail",{
d:event[req.params.id]


    });
});
router.get("/events",function(req,res){
    res.render("event");
});

module.exports = router;
