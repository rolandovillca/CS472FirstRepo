const express = require("express");
const app = express();

// Excercise 1:
app.get("/", (req, res) => {
    let name = req.query.name;
    let age = req.query.age;
    if (!name) name = "person";
    if (!age) age = 25;
    res.send(`Welcome: ${name}, Age: ${age}`);
});

app.listen(3000);
