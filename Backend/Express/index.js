const express=require("express");
const app=express()



let port=8080; //8080 custom server

app.listen(port,()=>
{
    console.log("App Is listening on Port ",port);
});

// app.use((req,res)=>
// {   
//     // req accepts
//     console.log("Request Recevied");

//     // res send
//     res.send("This is Basic and first response ");

// });
app.get("/",(req,res)=>
{
    let code=("<h1>I Am Shrinath Rajput</h1> <h2>My Skill is</h2> <ul><li>Pyhton</li><li>Java</li><li>C</li><li>C++</li></ul>")
    res.send(code);

});

app.get("/title",(req,res)=>
{
    let code1=("<h1>I Am Shrinath Rajput</h1> <h2>My Skill is</h2> <ul><li>Pyhton</li><li>Java</li><li>C</li><li>C++</li></ul>")
    res.send(code1);

});
app.get("/skill",(req,res)=>
{
    let code2=("<h1>I Am Shrinath Rajput</h1> <h2>My Skill is</h2> <ul><li>Pyhton</li><li>Java</li><li>C</li><li>C++</li></ul>")
    res.send(code2);

});
app.get("/contact",(req,res)=>
{
    let code3=("<h1>I Am Shrinath Rajput</h1> <h2>Contact Me </h2> <h3>9699510445</h3>")
    res.send(code3);
});

// path parameter 
app.get("/:username",(req,res)=>
{
    let {username}=req.params;
    res.send(`Hello save the usename @${username}`);
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