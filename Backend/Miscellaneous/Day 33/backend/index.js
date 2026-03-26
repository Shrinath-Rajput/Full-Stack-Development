// const express = require("express");
// const app = express();
// const port = 8080;

// app.use(express.json());

// // TEST route
// app.get("/", (req, res) => {
//     res.send("Server working");
// });

// // REGISTER route
// app.post("/register", (req, res) => {
//     console.log(req.body);
//     res.send("Register working");
// });

// app.listen(port, () => {
//     console.log("Server running on port", port);
// });

const express = require("express");
const app = express();
const port = 8080;

// Middleware (IMPORTANT)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TEST route
app.get("/", (req, res) => {
    
    res.send("Server working");
});

// ✅ GET route add kara
app.get("/register", (req, res) => {
    console.log(req.query);
    res.send("GET Register Working");
});

// POST route
app.post("/register", (req, res) => {
    console.log(req.body);
    res.send(`POST Register Working`);
});


app.get("/:username",(req,res)=>
{
    let {username}=req.params;
    res.send(`<h1> ${username} </h1>  @${username}`);
})

// Query Search
app.get("/search",(req,res)=>
{
    let {q}=req.query;
    res.send(`Result is good:${q} `);
});



// Kayam End la thevaych  route nasel aani dusra route call kela tr filenot funded show hoel 
app.use((req,res)=>
{
    res.status(402).send("FIle is not match and founded");
});



app.listen(port, () => {
    console.log("Server running on port", port);
});

