let express = require("express");
let path = require("path");
let app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/form.html"));
});

app.listen(3000);