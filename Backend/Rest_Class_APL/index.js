const express=require("express");
const app=express()

const port=8080;
const path=require("path");

const { v4: uuidv4 } = require("uuid");
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const methodOverride=require("method-override")

// Middleware (IMPORTANT)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.use(express.static(path.join(__dirname,"public")));



let posts=[
    {
        id:uuidv4(),
        Name:"Shrinath Rajput",
        Comment1:"I Love Coding"
    },

     {
        id:uuidv4(),
        Name:"Shrinath Rajput",
        Comment1:"I Love Playing Cricket"
    },

     {
        
        id:uuidv4(),
        Name:"Shrinath Rajput",
        Comment1:"I Love to See My Ideal Virat Kohli to Anytime NAy day and any min"
    }
];


app.get("/posts",(req,res)=>
{
    // let code=("<h1><br>Shrinath Rajput</br></h1>,<h2>Ideal Name :Virat Kohli</h2>");
    res.render("index",{posts});
});


// he get use kel karan new data kiav form create kela (new ejs manun aani tya form vr info ghetl aani submit zal ki ek api tayar honar aani get karnar)
app.get("/posts/new",(req,res)=>
{
    res.render("new",{posts});
});

// aata post method karnar varun ghetlela data backend la janar aani new post create honar 

app.post("/posts",(req,res)=>
{
    let id=uuidv4();
    let {Name,Comment1}=req.body;
    posts.push({id,Name,Comment1});
// aata res.redierct karaych amanje url connect karaych same dirct posts ch page aal opahije url connet karaych
    res.redirect("/posts")
})

app.get("/posts/:id",(req,res)=>
{
    let {id}=req.params;
    // id la find kel aaplya dataset mde 
    let post=posts.find((p)=>id===p.id);
    
    res.render("show.ejs",{post});
})

// Update the value using patch method

app.patch("/posts/:id",(req,res)=>
{
    let {id}=req.params;
    let newComment1=req.body.Comment1;
    let post=posts.find((p)=>id===p.id);
    post.Comment1=newComment1;
    console.log(post);
    res.redirect("/posts");
    
});


// edit infomartion
app.get("/posts/:id/update",(req,res)=>
{
    let {id}=req.params;
    let post=posts.find((p)=>id===p.id);
    res.render("update.ejs",{post})
})

// Delete Post
app.delete("/posts/:id",(req,res)=>
{
    let {id}=req.params;
    posts=posts.filter((p)=>id!==p.id);
    res.redirect("/posts");
})





app.listen(port,()=>
{
    console.log(`App Is Listen to EveryThing ${port}`)
})