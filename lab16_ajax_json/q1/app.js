const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

const list = {};

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/add", (req, res) => {
    console.log(req.body);
    const fname = req.body.fname;
    const lname = req.body.lname;
    const atime = req.body.atime;
    list[fname + " " + lname + " " + atime] = { ...req.body };
    res.status(200);
    res.end();
});

app.get("/list", (req, res) => {
    res.render("list", { list: list });
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("Listening on port " + PORT);
    }
});