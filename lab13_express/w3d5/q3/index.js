let express = require("express");
let path = require("path");
let app = express();

// Setting port:
app.set("port", process.env.PORT || 3000);
const PORT = app.get('port');

app.use("/myassets", express.static(path.join(__dirname, "public")));

// Allow to use query string
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/result", (req, res) => {
    res.send(`Name: ${req.body.name}, Age: ${req.body.age}`);
    console.log(`Sending back Name: ${req.body.name} and Age: ${req.body.age}`);
});

app.listen(PORT);