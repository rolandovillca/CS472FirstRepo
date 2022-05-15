let express = require("express");
let path = require("path");
let app = express();

// app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send(`<form method="POST">
                <input name="name">
                <input name="age">
                <input type="submit">
                </form>`);
});

app.post("/result", (req, res) => {
    res.send(`Name: ${req.body.name}, Age: ${req.body.age}`);
    console.log(`Sending back Name: ${req.body.name} and Age: ${req.body.age}`);
});

app.listen(3000);