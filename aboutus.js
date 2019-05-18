var router = require("express").Router();
const request = require('request');

<<<<<<< HEAD
router.get("/about",function(req,res){
    res.render("about");
=======
var advMembers = [{
    name: "Dr. Radha R",
    desg: "Faculty Coordinator",
    desc: "She has been instrumental in serving as a bridge between the institute and the club. She cares for the welfare of all the members of the club. Goes out of her way to make sure that the club is functioning properly.",
    photo: "maam.jpg"
},
{
    name: "Rishabh Verma",
    desg: "President",
    desc: "He has had the opportunity to be a part of numerous events that have occured below the banner of Enactus, provided assistance and ideas wherever possible.",
    photo: "rishabh.jpg"
},
{
    name: "Avinash Mukund",
    desg: "Vice President - Administration and Team",
    desc: "Lets just pretend that this is a clever bio. Also, happen to have a good heart and try to live in the moment. A strong headed leader and very optimistic person.",
    photo: "avinash.jpg"
},
{
    name: "Kunal Chandiramani",
    desg: "Vice President - Projects",
    desc: "He has had the opportunity to be a part of numerous events that have occured below the banner of Enactus, provided assistance and ideas wherever possible.",
    photo: "kunal.jpg"
},
{
    name: "Pranav Jain",
    desg: "Member",
    desc: "I believe in bringing about a change with the wit within me. Correcting and getting corrected is what it boils down to in the end.",
    photo: "pranav.jpg"
},
{
    name: "Ojaswini Marathe",
    desg: "Member",
    desc: "A benevolent soul, bubbling with incandescent energy, Ojaswini's heart is too big for her body. She has a penchant for helping those in need and making a difference in this world.",
    photo: "ojaswini.jpg"
},
{
    name: "Arpita Kakkirala",
    desg: "Member",
    desc: "Hard-working and passionate towards helping the society, With my analytical expertise, I lead the Finance department. Somnophile | Love fireworks | Aim for the stars|",
    photo: "arpita.jpg"
},
{
    name: "Herman Lloyd Menenzes",
    desg: "Member",
    desc: "A prolific content writer with ingenious ideas and a sincere willingness to bring about a positive change in the society.",
    photo: "herman.jpg"
},
{
    name: "Ankit Mehta",
    desg: "Member",
    desc: "I am an  individual with a penchant for marketing and a knack to bring out the best in people by leading them to the path of accomplishment.",
    photo: "ankit.jpg"
},
{
    name: "Divya Agarwal",
    desg: "Member",
    desc: "A gifted leader, I am exceptionally good at managing people and keeping track of deadlines, I believe in prioritising tasks wisely and sticking to it.",
    photo: "divya.png"
},
{
    name: "Sakshi Singh",
    desg: "Member",
    desc: "A diligent person, who believes in the saying , 'Life is too short to miss out on opportunities'. Heavily involved in social activities and a complete workaholic.",
    photo: "sakshi.jpg"
}];

var finMembers = [{
    name: "Anshul Yadav",
    desg: "Finance Head",
    desc: "I am ambitious and driven. I thrive on challenge and constantly set goals for myself, so I have something to strive toward. I’m not comfortable with settling, and I’m always looking for an opportunity to do better and achieve greatness I am passionate about my work and have a steady source of motivation that drives me to do my best.",
    photo: "anshul.jpg"
},
{
    name: "Veda Nair",
    desg: "Member",
    desc: "Highy motivated and hard-working and also a gifted orator. Enactus has given me the right platform to do my bit for the society.",
    photo: "veda.jpg"
},
{
    name: "Urmila Singh",
    desg: "Member",
    desc: "I love writing and exploring people. I want to be an entrepreneur in my life and love reading books. I love taking interest in something extra that gives me goosebumbs everytime i do it.I love living life my way.",
    photo: "urmila.jpg"
}];

var creMembers = [{
    name: "Devashish Srivastava",
    desg: "Creative Head",
    desc: "A warm and peaceful soul residing inside a chubby figure, a patient and hard working guy who is quite resourceful, willing to learn new skills and values, and experienced in the field of social work and welfare.",
    photo: "devashish.jpg"
},
{
    name: "Pragya Tripathi",
    desg: "Creative Head",
    desc: "A quirky, fun loving , kind hearted, inspective and an affectionate person. Good with her words, and loves working to make the world a better place one step at a time.",
    photo: "pragya.png"
},
{
    name: "Abhishek Satapathy",
    desg: "Member",
    desc: "I am a part of the web development team and I am pretty sure if I BS the rest of the paragraph no one would notice. ",
    photo: "satapathy.jpg"
},
{
    name: "Pratima Dumpala",
    desg: "Member",
    desc: "Sarcasm is her sword while wit is her shield. But she'd would willingly drop them both in favour of food and treats.",
    photo: "pratima.jpg"
},
{
    name: "M. Harini",
    desg: "Member",
    desc: "19 yrs old. Brought up in chennai. Doing my 2nd year B.tech course ECM dept. I socialize with people. I love to sketch and paint.",
    photo: "harini.jpg"
},
{
    name: "Archit Dehloo",
    desg: "Member",
    desc: "Dynamically Agile.",
    photo: "archit.jpg"
}];

var hrMembers = [{
    name: "Ashna Jacob",
    desg: "HR Head",
    desc: "A people's person with a genuine heart of giving. Making the world a better place one smile at a time. Very good at managing people and ensures a good team morale.",
    photo: "ashna.jpg"
},
{
    name: "Shanal Tripathy",
    desg: "Member",
    desc: "bla  bka bla",
    photo: "janedoe"
}];

var mnsMembers = [{
    name: "Ananya Srinath",
    desg: "MNS Head",
    desc: "	A young budding lawyer passionate about bringing a positive change to society. Humbleness, exuberance & compassion in the right mixture, is what truly defines her.",
    photo: "ananya.jpg"
},
{
    name: "Himanshu Sharma",
    desg: "MNS Head",
    desc: "Not even a truckload of sunshine can stand a chance against the brightness of her smile. Hardwork, patience and unrelenting support are the pillars of her heart.",
    photo: "himanshu.jpg"
},
{
    name: "Aditi Maheshwari",
    desg: "Member",
    desc: "An active member working in Marketing Department of Enactus VIT Chennai. Contributing towards spreading social awareness.",
    photo: "aditi.jpg"
},
{
    name: "Manas Srivastava",
    desg: "Member",
    desc: "Gaining an undergraduate opportunity where my drive and determination can nurture and enhance my leadership qualities to become a useful asset to the organisation.",
    photo: "manas.jpg"
},
{
    name: "Garima Setia",
    desg: "Member",
    desc: "I am someone who loves to explore new things and is ready to work at any hour of the day and do any challenging work.",
    photo: "garima.jpg"
},
{
    name: "Ishani Tibrewal",
    desg: "Member",
    desc: "Not even a truckload of sunshine can stand a chance against the brightness of her smile. Hardwork, patience and unrelenting support are the pillars of her heart.",
    photo: "ishani.jpg"
},
{
    name: "Aditya Singh Bhandari",
    desg: "Member",
    desc: "Optimistic in thought and approach. Like to talk to new people and I easily mingle with them.",
    photo: "aditya.jpg"
},
{
    name: "Jyothika George",
    desg: "Member",
    desc: "I am someone who loves to explore new things and is ready to work at any hour of the day and do any challenging work.",
    photo: "jyothika.jpg"
},
{
    name: "Yashvardhan Sharma",
    desg: "Member",
    desc: "I am studying ECM, like playing football and Badminton. I want to contribute to the society in any way possible. ",
    photo: "yash.jpg"
},
{
    name: "Aditya Kumar Jha",
    desg: "Member",
    desc: "Marketing strategist, Writer and Poet. He loves contributing to society and uplifting the poor. Goes out of his way to achieve his goals.",
    photo: "akjha.png"
}];

router.get("/about", function (req, res) {
    res.render("aboutus",{advMembers:advMembers,finMembers:finMembers, mnsMembers:mnsMembers, hrMembers:hrMembers, creMembers: creMembers});
>>>>>>> origin/master
});

router.get("/about/adv",function(req,res){
    res.end(JSON.stringify(advMembers));
});

router.get("/about/fin",function(req,res){
    res.end(JSON.stringify(finMembers));
});

module.exports = router;
