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

// Get Single User for Editing
app.get("/users/:id",(req,res)=>
{
    let q=`select * from user where id = ?`;
    try{
        connection.query(q,[req.params.id],(err,result)=>
        {
            if (err) throw err;
            if (result.length === 0) {
                return res.status(404).send("User not found");
            }
            console.log(result);
            res.render("edit",{user:result[0]});
        })
    }catch(err){
        console.log(err);
        res.status(500).send("Error from database")
    }
})

// Update User
app.put("/users/:id",(req,res)=>
{
    let q=`update user set name = ?, email = ?, password = ? where id = ?`;
    try{
        connection.query(q,[req.body.name, req.body.email, req.body.password, req.params.id],(err,result)=>
        {
            if (err) {
                console.log(err);
                return res.status(500).send("Error updating user");
            }
            console.log("User updated:", result);
            res.redirect("/users");
        })
    }catch(err){
        console.log(err);
        res.status(500).send("Error from database")
    }
})

//edit page
app.get("/users/:id/edit", (req, res) => {
    let { id } = req.params;
     
     let q=`SELECT * FROM user WHERE id ='${id}'`;
    connection.query(q, (err, result) => {
       
        if (err) throw err;

        res.render("edit", { user: result[0] }); 
    });
});

//delete page
app.delete("/users/:id", (req, res) => {
    let { id } = req.params;

    console.log("DELETE ID:", id); // 👈 ADD

    let q = "DELETE FROM user WHERE id = ?";

    connection.query(q, [id], (err, result) => {
        if (err) {
            console.log("DB ERROR:", err); // 👈 ADD
            return res.json({ success: false });
        }

        console.log("RESULT:", result); // 👈 ADD

        res.json({ success: true });
    });
});

/// addd page
// open form
app.get("/users/new", (req, res) => {
    res.render("add");
});

// add user
app.get("/users/new", (req, res) => {
    res.render("add"); // तुझा हा HTML ejs मध्ये convert कर
});

app.post("/users", (req, res) => {
    let { name, email, password } = req.body;

    console.log("DATA:", req.body); // 👈 check

    let q = "INSERT INTO user(name,email,password) VALUES (?, ?, ?)";

    connection.query(q, [name, email, password], (err, result) => {
        if (err) {
            console.log(err);

            if (err.code === "ER_DUP_ENTRY") {
                return res.send("Email already exists ❌");
            }

            return res.send("Error ❌");
        }

        console.log("Inserted:", result);
        res.redirect("/users"); // success
    });
});
app.listen(port,()=>
{
    console.log(`App Is Listen to EveryThing ${port}`)
})