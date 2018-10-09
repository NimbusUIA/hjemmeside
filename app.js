var express = require("express")
var app = express()
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI,  {useNewUrlParser: true})


app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index")
})

app.get("/medlemmer/:medlem", function(req, res){
    var medlem = req.params.medlem


   
        res.render(medlem)
    
})









var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);


var beb = Cat.create({
    name: "Bubba",
    age: 19,
    temperament: "nice"
})


app.listen(process.env.PORT, process.env.IP, () => console.log("Server running at port " + process.env.PORT))