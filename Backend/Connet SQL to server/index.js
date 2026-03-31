// Import faker package
const { faker } = require('@faker-js/faker');
const mysql=require("mysql2");
const express=require("express");
const app=express();

const port=8080;
// ejs path
const path=require("path");

const { v4: uuidv4 } = require("uuid");
const methodOverride=require("method-override")

// Middleware (IMPORTANT)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); 

// ejs template setup
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.use(express.static(path.join(__dirname,"public")));






connection=mysql.createConnection({ host:"localhost", user: "root", password: "shrinath1814", database: "Delta_firstTime_App" });
/*
try{
connection.query("show tables",(err,result)=>
{   
    if(err) throw err;
    console.log(result);
});
}catch(err){
    console.log(err);
}
*/
let getrandomvalues =()=>
{
    return [
        //faker.string.uuid(),
        faker.person.firstName(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

//insert new data
let inser="Insert into user(name,email,password)values ? ";
let data =[];
for (let i=0;i<=100;i++){
    data.push(getrandomvalues());
}




// let user=["1","Shri@123","rajputshri@gmail.com","123"];
/*let users=[
    ["11","Shri@12312","rajputshri18@gmail.com","12318"],
    ["2","Shri@123456","rajputshri123@gmail.com","123456"],
    ["3","Shri@123768","rajputshri321@gmail.com","123987"],
    ["4","Shri@12399","rajputshri111@gmail.com","12399"]
];
*/
try{
connection.query(inser,[data],(err,result)=>
{   
    if(err) throw err;
    console.log(result);
});
}catch(err){
    console.log(err);
}


// Home Page
app.get("/",(req,res)=>
{
    let q=`select count(*) from user`;
    try{
        connection.query(q,(err,result)=>
    {
        if (err)throw err;
        console.log(result)
        res.render("home",{result:result[0]['count(*)']});

    });
    } catch(err){
        console.log(err);
        res.send("Error from Database")
    }
    
});

//Users Page
app.get("/users",(req,res)=>
{
    let q=`select * from user`;
    try{
        connection.query(q,(err,result)=>
        {
            if (err) throw err;
            console.log(result);
            res.render("users",{users:result});
        })
    }catch(err){
        console.log(err);
        res.send("Error from database")
    }
})


app.listen(port,()=>
{
    console.log(`App Is Listen to EveryThing ${port}`)
})