import express from "express";
import cors from "cors";

const app = express();

//middleware setup
app.use(cors());
app.use(express.json());

//custom logging middleware
app.use((req,res,next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();//pass control to the next middleware/route
});

//test endpoint
app.get("/api/health",(req,res) =>{
    res.json({ok:true,time:new Date().toISOString()});
});

//profile endpoint

app.get("/api/profile",(req,res) => {
    const profile = {
        name:"Dhanush",
        title:"Full stack developer",
        about:"I am passionate about building webapplications and learning modern technologies",
        skills:["javascript","React","Node.js","Express","Tailwind css"],
        contact:{
            email:"dhanushp630@gmail.com",
            linkedin:"https://linkedin.com/in/your-profile",
            github:"https://github.com/your-username"
        }
    };
    res.json(profile);
});
//projects endpoint
app.get("/api/projects",(req,res) => {
    const projects =[
        {
            id:1,
            name:"Portfolio website",
            description:"A personal portfolio built with react and Tailwind css",
            techstack:["React","Tailwind","Node.js","Express"],
            github:"https://github.com/",
            demo:"https://portfolio-demo"
        },
        {
            id:2,
            name:"Vehicle service booking app",
            description:"A full-stack vehicle service app with user and customer friendly interface",
            techstack:["React","Node.js","Express","mysql"],
            github:"https://githud.com",
            demo:"https://vehicle service booking app"

        }
    ];
    res.json(projects);
});
//start server
const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
    console.log(`API running on http://localhost:${PORT}`);
});


