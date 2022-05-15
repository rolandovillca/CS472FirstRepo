const express = require("express");
const path = require("path");
const app = express();

app.set("port", process.env.PORT || 3000);
const PORT = app.get("port");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
app.use("/views", express.static(path.join(__dirname, "view")));

app.get("/", (req, res) => {
    const date = new Date();
    res.render("index", {
        time: date.toTimeString()
    });
});

app.listen(PORT, (err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Server listening on port", PORT);
});