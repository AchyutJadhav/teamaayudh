const express = require("express");
// const bodyParser = require(body - parser);



const sponsors = [
  {
    logo: "ansys logo",
    src:"Images/sponsers-img/ansys-logo.png" ,
  },
  {
    logo: "amol battery logo",
    src:"Images/sponsers-img/amol_battery.png",
  },
  {
    logo:"matlab logo",
    src:"Images/sponsers-img/matlab-logo.png",
  },
  {
    logo:"gurukul acadamy logo",
    src:"Images/sponsers-img/gurukul-acadamy-logo.jpg"
  },
  {
    logo:"atharva industries logo",
    src:"Images/sponsers-img/Atharva.png"
  },
  {
    logo:"MV industries logo",
    src:"Images/sponsers-img/MV-logo.png"
  }
];

const teamMembers = [
    {
        name:"Balaji Mohite",
        img:"Images/team members/balaji mohite.png",
        position: "Captain",
        class:"TE Mechanical",

        linkedin:"https://www.linkedin.com/in/balaji-mohite-319a45213",
        insta:"https://www.instagram.com/invites/contact/?i=myus5vh0r18q&utm_content=3rmsy31"
    },
    {
        name:"Ajay Dumbre",
        img:"Images/team members/ajay dumbre.png",
        position: "Senior Team Member",
        class:"BE Mechanical",

        linkedin:"https://www.linkedin.com/mwlite/in/ajay-dumbre-1a55ba21a",
        insta:"https://instagram.com/ajaydumbre2002?igshid=YmMyMTA2M2Y="
    },
    {
        name:"Rohit Rothe",
        img:"Images/team members/rohit rothe.png",
        position: "Senior Team Member",
        class:"BE Mechanical",

        linkedin:"https://www.linkedin.com/in/rohit-rothe-8919a5190",
        insta:"#"
    },
    {
        name:"Kiran Mhetre",
        img:"Images/team members/kiran mhetre.png",
        position: "Chief Design Officer",
        class:"TE Mechanical",

        linkedin:"https://www.linkedin.com/in/kiran-mhetre-5a385820b/",
        insta:"https://www.instagram.com/invites/contact/?i=11bpvjqg7ownu&utm_content=by2pibc"
    },
    {
        name:"Achyut Jadhav",
        img:"Images/team members/achyut jadhav.png",
        position: "Web Developer",
        class:"TE ENTC",

        linkedin:"https://www.linkedin.com/in/achyut-jadhav-9035ba208/",
        insta:"#"
    },
    {
        name:"Vishal Phisphise",
        img:"Images/team members/vishal phisphise.png",
        position: "Automation Officer",
        class:"TE Automobile",

        linkedin:"https://www.linkedin.com/in/vishal-phisphise-03b54420a",
        insta:"https://instagram.com/vishalphisphise?igshid=YmMyMTA2M2Y="
    },
    {
        name:"Pratik Patil",
        img:"Images/team members/pratik patil.png",
        position: "Chief Innovation Officer",
        class:"TE Mechanical",

        linkedin:"https://www.linkedin.com/in/pratik-patil-a276b4232",
        insta:"#"     //team
    },

    {
        name:"Pratik Pote",
        img:"Images/team members/pratik pote.png",
        position: "Chief Financial Officer",
        class:"TE Mechanical",

        linkedin:"https://www.linkedin.com/in/pratik-pote-7aa444205",
        insta:"https://instagram.com/ll.pratik.pote.patil.ll?igshid=YmMyMTA2M2Y="
    },
    {
        name:"Kedarnath Sahu",
        img:"Images/team members/kedarnath sahu.png",
        position: "Chief Graphic Designer",
        class:"TE Instrumentaion",

        linkedin:"https://www.linkedin.com/in/sahu-kedarnath-099238228/",
        insta:"https://instagram.com/sahu_kedarnath___07?igshid=YmMyMTA2M2Y="
    },
    {
        name:"Rachana Thakare",
        img:"Images/team members/rachana thakare.png",
        position: "Chief Marketing Officer",
        class:"TE Mechanical",

        linkedin:"https://www.linkedin.com/in/rachana-thakare-99255924a",
        insta:"https://www.instagram.com/invites/contact/?i=mlakgy6j64bx&utm_content=l0lmbnz"
    },

    {
        name:"Prathamesh Kotkar",
        img:"Images/team members/prathamesh kotkar.png",
        position: "Shipping and Inventory Manager ",
        class:"TE Automobile",

        linkedin:"#",
        insta:"https://instagram.com/prathamesh__0397?igshid=YmMyMTA2M2Y="
    },
    {
        name:"Siddhi Jagdale",
        img:"Images/team members/siddhi jagdale.png",
        position: "Chief Sponsorship Officer",
        class:"TE instrumentaion",

        linkedin:"https://www.linkedin.com/in/siddhi-jagdale-571b08215",
        insta:"https://instagram.com/siddhu_2804?igshid=YmMyMTA2M2Y="
    },
    {
        name:"Parshuram Nandiwale",
        img:"Images/team members/parshuram nandiwale.png",
        position: "Tool Manager",
        class:"TE Automobile",

        linkedin:"https://www.linkedin.com/in/parshuram-nandiwale-51b38a182",
        insta:"https://www.instagram.com/invites/contact/?i=bv6n96hti5rr&utm_content=e4usqel"
    },
    {
        name:"Savata Tilekar",
        img:"Images/team members/savata tilekar.png",
        position: "Logistic Officer",
        class:"TE Automobile",

        linkedin:"https://www.linkedin.com/in/savata-tilekar-06395617b",
        insta:"https://www.instagram.com/rutik_s_tilekar/"
    },
]

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home_page.ejs", {
    sponsors:sponsors
  });
});

app.get("/about", function (req, res) {
  res.render("about.ejs");
});

app.get("/team", function (req, res) {
  res.render("team.ejs", {teamMembers:teamMembers});
});

app.get("/support", function (req, res) {
    res.render("support.ejs");
  });


let port = process.env.PORT;
if(port == null || port ==""){
  port = 3000;
}

app.listen(port, function (req, res) {
  console.log("Server is working");
});
