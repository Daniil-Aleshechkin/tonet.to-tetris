const express = require("express");
const app = express();
const port = 5000;
const tetrisRoute = require("./routes/tetris")

app.set("view engine","ejs");
app.use("/bin",express.static("bin"));
app.use("/assets",express.static("assets"));

app.get("/", (req,res) => {
    res.render("index")
})

console.log("Starting on port "+port);

app.listen(port);

app.use("/tetris",tetrisRoute);