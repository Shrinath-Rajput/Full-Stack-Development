const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

// TEST route
app.get("/", (req, res) => {
    res.send("Server working");
});

// REGISTER route
app.post("/register", (req, res) => {
    console.log(req.body);
    res.send("Register working");
});

app.listen(port, () => {
    console.log("Server running on port", port);
});