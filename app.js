var express = require("express")
var app = express()


app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index")
})

app.get("/medlemmer/:medlem", function(req, res){
    var medlem = req.params.medlem


   
        res.render(medlem)
    
})


app.listen(process.env.PORT, process.env.IP, () => console.log("Server running at port " + process.env.PORT))