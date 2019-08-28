var router = require("express").Router();
const request = require('request');
var event = [{
        date: '25 july 2017',
        name: 'Project Malar',
        url: "/images/event/Malar/1.jpg",
        desc1: 'Primarily, the aim is to tackle the pollution caused by flowers at its roots and hence trying to minimise the water pollution caused indirectly due to this, and provides a livelihood mainly to female scavengers by employing them right from the collection of flowers to the manufacturing of the incense sticks. ',
        desc2: '“Flowers used in religious practice have sanctity, a reverence that necessitates discarding them respectfully in the water”. But we undermine the level of pollution this causes, since it tends to disintegrate in water and reduce the oxygen level, which in turn affects the aquatic biodiversity.“It is not just a case of caste discrimination, but also gender discrimination, as women are forced to do this basest of jobs”. Scavenging: a euphemism for the basest of work that a person can be assigned with is disturbingly prominent among the women of the lower class. Pollution and discrimination against woman have been prevalent in this world since the beginning of time, just the extent up to which it was present was different. Here, we try to address the issues that are deeply rooted into our society which inhibits the development of the woman who carries the stigma of caste.',
        desc3: 'Since the project is in its rudimentary and developing stage, we are focussing more on the quality of the incense sticks rather than the quantity. Intense research has already gone into developing the current product formula and is still going on to maximise the life and the fragrance of the incense sticks. Around 50 boxes of it has already been made. The main workforce who puts in the magnanimous effort is the ladies of the Thirusulam slum. They are very thankful for the work they’ve received and we are thriving to eradicate the misconception about the scavenging activities and also aiming to bring the woman workforce to the forefront. We also have an enthusiastic student workforce who tirelessly works for the betterment of the quality of our product and constantly pitching ideas to maximise the profit outcome for the benefit of the woman workforce.',
        desc4: 'Recently VIT Chennai acknowledged the efforts the team had put into the project. On International Women’s Day, they awarded the workforce with a flower grinding machine; a contemporarily relevant and helping gift which reduced the amount of manual labour they had to put. This day was also marked as the product launch of our project. We are thankful that our college believes in our cause and supports us in our mission and we truly feel that this is the first milestone of our project and we are determined for more.'
    },
    {

        date: '26 july 2017',
        name: 'Project X',
        url: "/images/event/X/1.jpg",
        desc1: "Project Ujjwal aims at and relies on the basic sewing skills, thereby, making beautiful and striking products from rags and waste cloth. It adheres to the growing demand of switching from plastic to decomposable materials which would not harm the environment. It also aims at reusing old newspapers and making paper bags out of them which will be used in supermarkets. The two goals of this project are to address the damage to the environment caused by the increasing use of plastic bags and to provide employment to the underprivileged such as ladies from a slum.",
        desc2: ' Burmese refugees and transgender community, whose talents if shaped and guided well could give them a chance to stand on their feet and earn for themselves. We had to make sure that the products that we made would appeal to our target audience and therefore, it was essential that every piece was produced through our audiences’ lens. ',
        desc3: 'The designs and cost analysis were done, keeping our audience in mind to ensure the success of our project.Our team came up with a system to collect the textile waste from industries, and old clothes from the local societies which could be used as raw materials to produce handmade recycled products, like bags, pouches etc.',
        desc4: 'Our basic idea was to empower the ladies from the Chennai slums, the transgender community and the Rohingya refugees and distribute the profit amongst them. '

    },

    {
        date:'26 July 2017',
        name:'Project Naari',
        url:"/images/event/Naari/20.jpg",
        desc1:'The project creates awareness on the methods to be taken up in disposal of the sanitary napkins and the safety measures.It focuses on biodegradable pads which is a hygienic practice and is also an environment friendly product.Project NAARI aims to provide HYGIENIC AND HEALTHY environment to people.' ,
        desc2:'THE NEED FOR NAARI: Menstrual hygiene and management is a very elementary knowledge that people need to have. Living in the 21st century where the world is heading with technology and modernisation, the taboo on menstruation still prevails and there are people who are still have not explored on what is the basic hygiene required for a healthy living. Thus, it is necessary for women to know and use hygienic as well as environment friendly methods during menstruation. NAARI is an initiative taken for this issue.',
        desc3:'PROJECT PARTNERS:We have collaborated with Ecofemme (A social enterprise by women that manufactures and sells cloth pads) and Myna Mahila (a foundation that aspires to empower women and end period poverty).',
        desc4:''
    },
    {
        date: '26 july 2017',
        name: 'Project Pragati',
        url: "/images/event/al/1.jpg",
        desc1: "India is a land of farmers and agriculture is the one of the major occupations. A lot of crops that are being grown require chemical fertilizers and the farmers are heavily dependent on them, these fertilizers run off from the fields during rainfall and pollute the nearby water source which leads to health hazards that are deadly for all living beings dependent on that source. The aim, is to grow and harvest, algal biomass that can be used as a nutrient rich bio organic fertilizer for crops. Algae mixed with the soil or substituted with other fertilizers, would help, enrich the soil with the required nutrients and increase its fertility without causing any kind of pollution.",
        desc2: 'This is beneficial to the farmers and will help us contribute to the agricultural sector, and assist to sustain it. Project Pragati mainly focuses on providing the under privileged sector of the society with the skill-sets required for a business model, so that there exists minimum competition in the beginning of the business thus allowing it to grow at a faster rate. The basic idea would require the utilization of waste water. ',
        desc3: 'The target audience would be taught the methodology behind growing the algae using a small setup and waste water of their household/ locality i.e. the efficient usage of the available resources and waste water to come up with something productive. They would be taught the basic means of communication to make it a self-sustainable process. he synthetic fertilizers would get replaced by cheap and organic ones thus making the soil nutrient-rich and porous, improving the quality of the soil. . The fertilizers present in the market give a certain amount of yield that can be increased by mixing the algae produced by the setups.',
        desc4: 'Our farmers are the backbone to our nation so aiding them to meet the demands of the ever growing population without compromising on quality or safety is of utmost importance. They would be taught the basic means of communication to make it a self-sustainable process.'
    }
    ,
    {
        date:'26 July 2017',
        name:'Project Naari',
        url:"",
        desc1:'',
        desc2:'',
        desc3:'',
        desc4:''
    }



];
router.get("/projects/:id", function (req, res) {
    res.render("project_detail", {
        d: event[req.params.id],l:2


    });
});
router.get("/projects", function (req, res) {
    res.render("project",{

        l:2
    });
});

module.exports = router;
