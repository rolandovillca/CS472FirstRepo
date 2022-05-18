const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, public)));

app.get("/", (req, res) => {
    
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("Listening on port: " + PORT);
    }
});
