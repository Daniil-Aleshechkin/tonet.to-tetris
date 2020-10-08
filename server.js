const express = require("express");
const app = express();
const port = 5000;

app.set("view engine","ejs");
app.use("/bin",express.static("bin"));

app.get("/", (req,res) => {
    res.render("index")
})

console.log("Starting on port "+port);

app.listen(port);
