const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();

const PORT = process.env.port || 3000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index", {title: "Hey", message: "Hello Rolando!!"});
});

app.post("/", (req, res) => {
    const key = req.body.key;
    const value = req.body.value;
    console.log(`Form Key: ${req.body.key}, Form Value: ${req.body.value}`);
    console.log(req.cookies.key);
    if (req.cookies.key) {
        console.log("Yes cookies, no need to create new ones.");
    } else {
        console.log("No cookies, creating new one.");
        res.cookie("key", key);
        res.cookie("value", value);
    }
    res.send("jajaja");
});

app.listen(PORT, (err) => {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log(`Listening on port: ${PORT}`);
    }
});