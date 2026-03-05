const express=require("express");
const app=express();

let port=8080;

app.set("view engine","ejs");

app.get("/",(req,res)=>
{
    res.render("home");
});

app.get("/",(req,res)=>
{
    res.send("This is response send here");
})




app.listen(port,()=>
{
    console.log("Template is listen app reqiuest")
});