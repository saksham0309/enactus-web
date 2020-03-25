var router = require("express").Router();
const request = require('request');
const fetch = require('node-fetch');

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
    name: "Divya Kannan",
    desc: "Being selfless and determined ,with a vision for a better tomorrow, I want to spread happiness by helping the underprivileged.",
    desg: "Member",
    photo: ""
}
,
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
},
{
    name: "Shivangi Mehrotra",
    desg: "Member",
    desc: "I have effective communication skills and I enjoy public speaking.    ",
    photo: ""
}
,
{
    name: "Utkarsh Mishra",
    desg: "Member",
    desc: "Hard working and passionate for doing something good for the society.",
    photo: ""
}
];

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
},
{
    name: "Varun. G",
    desg: "Member",
    desc: "Btech Mech, born and brought up in Chennai, but my heart follows Infinity and beyond. ",
    photo: ""
},

{
    name: "Geethu Haridas",
    desg: "Member",
    desc: "Like any other person I always have had difficulty answering this question. Unless someone is very specific about what they want to know, I cannot give a satisfactory answer. I'm a generally quite person and because of this a lot of people assume that I am a very calm and shy which is not always so. I like to believe that I have a logical and rational mind which is ironic given that I'm in the content writing department.",
    photo: ""
},
{
    name: "Meera George",
    desg: "Member",
    desc: "Head in the clouds. Living in the moment.Reaching beyond what destiny has to offer.",
    photo: ""
},
{
    name: "Ria Elizabeth Ranju",
    desg: "Member",
    desc: "Some steps up, some steps down. Exploring the staircases. Opening the doors. Living life one moment at a time.",
    photo: ""
},

{
    name: "V.Jayashree Nivedhitha",
    desg: "Member",
    desc: "A fun loving girl who is always ready to crack puns and jokes on any situation. A deep desire to help the society has landed my way into Creative Team of Enactus. ",
    photo: ""
},

{
    name: "Sangamithrai R",
    desg: "Member",
    desc: "I' am an artist by passion.I love to sketch and paint.I write during my free time.",
    photo: ""
},

{
    name: "Sarthak Parthasarathi Mohanty",
    desg: "Member",
    desc: "I am determined and never give up until I get something right. Always ready to shoot.",
    photo: ""
},

{
    name: "Soumitro Datta",
    desg: "Member",
    desc: "Can read and understand a couple laguages of machines. 2 Parts Web Developer, 1 Part Distance runner, 1/2 Part Bookworm, 3 Parts Party Person....Too many parts?    ",
    photo: ""
}
,
{
    name: "Shaurya Gupta",
    desg: "Member",
    desc: "I am just a curious person. I like to learn new things and have different experiences . I try to keep growing.    ",
    photo: ""
}
,
{
    name: "Priyam Gupta",
    desg: "Member",
    desc: "I think of myself as a hard-working person but at the same time I like to enjoy  life ",
    photo: ""
}


];

var hrMembers = [{
    name: "Ashna Jacob",
    desg: "HR Head",
    desc: "A people's person with a genuine heart of giving. Making the world a better place one smile at a time. Very good at managing people and ensures a good team morale.",
    photo: "ashna.jpg"
},
{
    name: "Shanal Tripathy",
    desg: "Member",
    desc: "",
    photo: ""
},
{
    name: "Aneesha Seth",
    desg: "Member",
    desc: "Enthusiastic and willing to help bring about awareness. Committed to giving back to society. ",
    photo: ""
},

{
    name: "Kush Khanna",
    desg: "Member",
    desc: "I, Kush Khanna, am a student at VIT Chennai pursuing ECM. I believe in expressing myself creatively through different forms and therefore, participate in various activities. I am currently a part of the Drama Club, and have given various performances for the same.  The 'Joy of Giving' is not just a motto, but a driving force in my life since a very long time.  My grandfather, JD Khurana, provides education to roadside children for free, and has set up a makeshift school over a period of time for the same. Helping him throughout his journey has taught me to practice perseverence and to believe in one's vision and cause, even when there is no one supporting you. I have actively participated and performed for various NGOs like CAN KIDS, ZIKR, and have served as a mentor for the Shiksha Kendra initiative at my school.  I hope to continue my process of giving back to the society in my own small ways, and therefore I've joined Enactus.    ",
    photo: ""
}
,
{
    name: "Austin Joseph",
    desg: "Member",
    desc: "Just your average teenager, likes to bond with people and make memories. Fond of music and literature, and does a lot of co-curriculars.    ",
    photo: ""
}
,
{
    name: "SANJANA PODDER",
    desg: "Member",
    desc: "I am an aspiring engineer, a diligent workaholic and a polyglot, striving for self-satisfaction in all my endeavours in life!    ",
    photo: ""
}


];

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
    name: "Pritrishna Sarmah",
    desg: "Member",
    desc: "A hard working engineer and a sincere person pursuing Electrical and Electronics Engineering. Dedicated towards work.    ",
    photo: ""
}


,
{
    name: "Ayushi Sharma ",
    desg: "Member",
    desc: "For those who know me, i can describe myself in one word, A learner. A music lover by heart, I embrace change as music flows, and balance family and future composedly. A good listener and a philanthropist at heart. I live for those smiles.    ",
    photo: ""
}
,
{
    name: "Akshitha Shankar",
    desg: "Member",
    desc: " I have always wanted to do my part to help improve lives of people who are in need. It has always been in me because of my parents who always say, 'Service to Humanity, is service to God Himself!'. It doesn't matter how big or small, it's the heart you put into it and the effort that counts!",
    photo: ""
}
,
{
    name: "Srinidhi Raja",
    desg: "Member",
    desc: "Good communication skills. Extrovert. Good at getting work done and leadership quality. Easy going.",
    photo: "https://imgur.com/6vZRQrP "
}
,
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

router.get("/about",async function (req, res) {
    const response1=await fetch('http://enactusvitc-org.stackstaging.com/admin/fetch_adv.php')
    const adv=await response1.json();
    const response2=await fetch('http://enactusvitc-org.stackstaging.com/admin/fetch_cre.php')
    const cre=await response2.json();
    const response3=await fetch('http://enactusvitc-org.stackstaging.com/admin/fetch_fin.php')
    const fin=await response3.json();
    const response4=await fetch('http://enactusvitc-org.stackstaging.com/admin/fetch_hr.php')
    const hr=await response4.json();
    const response5=await fetch('http://enactusvitc-org.stackstaging.com/admin/fetch_mns.php')
    const mns=await response5.json();

         //console.log(r1);



    res.render("aboutus",{adv:adv,cre:cre,fin:fin,hr:hr,mns:mns,advMembers:advMembers,finMembers:finMembers, mnsMembers:mnsMembers, hrMembers:hrMembers, creMembers: creMembers,l:1});
});

router.get("/about/adv",function(req,res){
    res.end(JSON.stringify(advMembers));
});

router.get("/about/fin",function(req,res){
    res.end(JSON.stringify(finMembers));
});

module.exports = router;
