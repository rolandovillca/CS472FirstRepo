const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    const date = new Date();
    res.locals = {title: "CS572"};
    res.status(200).render("index", {
        // title: "CS572",
        time: date.toTimeString()
    });
});

app.listen(PORT, (err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Server listening on port", PORT);
});