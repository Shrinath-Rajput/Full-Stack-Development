const express=require("express");
const app=express()

const port=8080;
const path=require("path");


// Middleware (IMPORTANT)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.use(express.static(path.join(__dirname,"public")));



let posts=[
    {
        Name:"Shrinath Rajput",
        Comment1:"I Love Coding"
    },

     {
        Name:"Shrinath Rajput",
        Comment1:"I Love Playing Cricket"
    },

     {
        Name:"Shrinath Rajput",
        Comment1:"I Love to See My Ideal Virat Kohli to Anytime NAy day and any min"
    }
]


app.get("/posts",(req,res)=>
{
    // let code=("<h1><br>Shrinath Rajput</br></h1>,<h2>Ideal Name :Virat Kohli</h2>");
    res.render("index",{posts});
})

app.listen(port,()=>
{
    console.log(`App Is Listen to EveryThing ${port}`)
})