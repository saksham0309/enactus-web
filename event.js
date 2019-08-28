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
    desc1:'The Diwali mela was aimed at selling all the items made by the slum ladies and Burmese refugees. It was heartening to see people spend their pocket money on buying diyas. It was nice to see that a lot of people do care about creating a positive change in the society. Since, the stall required full time attention, the entire team was required to be present at the stall. We gave each member a slot to be at the stall, but everyone was more than willing to stay a few extra hours and market the entire event. Not only did we achieve our desired goal, we enlightened a lot of people about how we function as a team working towards bringing a smile to the faces of the underprivileged.',
    desc2:'Diwali is a festival which embodies the spirit and benevolence of the human soul. And keeping up with the traditions that are customary for this festival of lights, Enactus VITC brought back Project Ujjwal, focused on empowering lives, with full force and renewed determination. Re enforcing our bond with the underprivileged residing in Padur Slums with whom we associated last Diwali as well, an aim to strengthen our cause was set.',
    desc3:'This time, our energetic and enthusiastic bunch of recruits took the lead to escalate The Diwali Mela up greater heights. Raw diyas were delivered to the skilled ladies residing in Padur Slums and all the batches which graced our stall were beautiful pieces, each exuding its own aura of radiance. Shapes, sizes and designs. We offered them a hand, but they showed us the path. Their finesse and dedication serves as an example for all of us and inspires us to follow through.',
    desc4:"We at Enactus VITC would like to take this opportunity to thank all the underpriveledged people from Padur who helped and we hope that they'll be a part of all our future endevours. simplicity and humbleness of our stall was for the sole purpose of highlighting the magnificence of these diyas. And the purpose was well served. Day 1 of The Diwali Mela 2018 ended with our largest sale to date.",
desc5:"After the tremendous response on Day 1 of The Diwali Mela, Day 2 started off with slightly lower expectations, but we were proved wrong. The turn up was astounding and the sales abundant. Enactus VITC's mission, to empower the lives of the underprivileged, riding high on momentum, gave us a promise and drive to give our very best. And this time, our energetic and enthusiastic bunch of new recruits took the lead to escalate The Diwali Mela to greater heights.",
desc6:"On the final day of The Diwali Mela, spirits were high and the air was tinged with amusement. The whole college, with its various nooks and crannies, bustled with elation. Due to the massive sales over the course of the Mela, on the final day, we had our repositories full, to fulfill our cause and to not disappoint the numerous who had already pre-booked their diyas! Against the backdrop of the Rangoli Competition, a myriad of festive and homely emotions hung around to remind us of the importance of our roots and how such moments bring us together. Such moments, which every person is entitled to and what The Diwali Mela was all about.",
desc7:"The Diwali Mela sale by Enactus VITC was a resounding success and it would not have been possible without the people who worked behind the scenes. Bringing a smile to peoples’ faces is what we at Enactus VITC do best, this time around it was the underprivileged people from Padur. They were ever so willing to paint the diyas we gave them. We at Enactus VITC would like to take this opportunity to thank all the underpriveledged people from Padur who helped and hope that they be part of all our future endevours."
}


];
router.get("/events/:id",function(req,res){
    res.render("event_detail",{
d:event[req.params.id],l:3


    });
});
router.get("/events",function(req,res){
    res.render("event",{l:3});
});

module.exports = router;
