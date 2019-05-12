var router = require("express").Router();
const request = require('request');
var event = [{
        date: '25 july 2017',
        name: 'Project Malar',
        url: "/img/event/trad/e1.jpg",
        desc1: 'Belief is an important aspect of life and we in improving the world through the smallest of efforts. National volunteering week was one such opportunity to do our bit for the society. We decided to address one of the major problems of our generation - lack of awareness regarding traffic rules and safe conduct on the road. In order to do that we conducted the Traffic Rules Awareness Drive, also known as T.R.A.D . Rules and regulations form a basic part of our living and their presence ensures our safety and well being.',
        desc2: 'We divided ourselves into two groups to assemble at both the Mambakkam and Navalur Signals. Groups of Enactus rangers traversed at a safe distance near the junction with banners and posters displaying catchy messages and captions. The other group of rangers went around distributing small tokens (such as bookmarks or pens which had traffic awareness rules printed on it). In addition to this we assisted non-vehicular commuters to commute in busy traffic by helping them cross the road, asking them about the problems they faced in everyday traffic for ideas on improving road safety and also enlightened them on the necessity of road safety.',
        desc3: 'We aimed at letting the public know about various safety measures which should be be taken while driving a vehicle or as a pedestrian or while commuting in general. We focused on informing the local populus about the importance of road safety using placards and communicating with the travelers. The primary objective of T.R.A.D was to spread awareness about the staggering number of road accidents happening in our nation and make people realise the difference simple changes in habits can bring about.',
        desc4: 'But in spite of the warnings and mishaps that happen, people still choose to remain ignorant. Our efforts were also a contribution to the National Volunteering Week that is held every year in the month of January to address an integral part and problem in the lives of each and every Indian citizen – traffic rules and its lack of awareness. The chief traffic signals around our college (Kelambakkam, Vandalur and OMR road areas) were targeted during the peak traffic hours, where our volunteers demonstrated the importance of following traffic rules to pedestrians and drivers using banners/placards, posters and several other means.'
    },
    {

        date: '26 july 2017',
        name: 'Project X',
        url: "/img/event/trad/e1.jpg",
        desc1: "Project Ujjwal aims at and relies on the basic sewing skills, thereby, making beautiful and striking products from rags and waste cloth. It adheres to the growing demand of switching from plastic to decomposable materials which would not harm the environment. It also aims at reusing old newspapers and making paper bags out of them which will be used in supermarkets. The two goals of this project are to address the damage to the environment caused by the increasing use of plastic bags and to provide employment to the underprivileged such as ladies from a slum.",
        desc2: ' Burmese refugees and transgender community, whose talents if shaped and guided well could give them a chance to stand on their feet and earn for themselves. We had to make sure that the products that we made would appeal to our target audience and therefore, it was essential that every piece was produced through our audiences’ lens. ',
        desc3: 'The designs and cost analysis were done, keeping our audience in mind to ensure the success of our project.Our team came up with a system to collect the textile waste from industries, and old clothes from the local societies which could be used as raw materials to produce handmade recycled products, like bags, pouches etc.',
        desc4: 'Our basic idea was to empower the ladies from the Chennai slums, the transgender community and the Rohingya refugees and distribute the profit amongst them. '

    },
    {
        date: '26 july 2017',
        name: 'Project Pragati',
        url: "/img/event/trad/e1.jpg",
        desc1: "India is a land of farmers and agriculture is the one of the major occupations. A lot of crops that are being grown require chemical fertilizers and the farmers are heavily dependent on them, these fertilizers run off from the fields during rainfall and pollute the nearby water source which leads to health hazards that are deadly for all living beings dependent on that source. The aim, is to grow and harvest, algal biomass that can be used as a nutrient rich bio organic fertilizer for crops. Algae mixed with the soil or substituted with other fertilizers, would help, enrich the soil with the required nutrients and increase its fertility without causing any kind of pollution.",
        desc2: 'This is beneficial to the farmers and will help us contribute to the agricultural sector, and assist to sustain it. Project Pragati mainly focuses on providing the under privileged sector of the society with the skill-sets required for a business model, so that there exists minimum competition in the beginning of the business thus allowing it to grow at a faster rate. The basic idea would require the utilization of waste water. ',
        desc3: 'The target audience would be taught the methodology behind growing the algae using a small setup and waste water of their household/ locality i.e. the efficient usage of the available resources and waste water to come up with something productive. They would be taught the basic means of communication to make it a self-sustainable process. he synthetic fertilizers would get replaced by cheap and organic ones thus making the soil nutrient-rich and porous, improving the quality of the soil. . The fertilizers present in the market give a certain amount of yield that can be increased by mixing the algae produced by the setups.',
        desc4: 'Our farmers are the backbone to our nation so aiding them to meet the demands of the ever growing population without compromising on quality or safety is of utmost importance. They would be taught the basic means of communication to make it a self-sustainable process.'
    }



];
router.get("/projects/:id", function (req, res) {
    res.render("project_detail", {
        d: event[req.params.id]


    });
});
router.get("/projects", function (req, res) {
    res.render("project");
});

module.exports = router;