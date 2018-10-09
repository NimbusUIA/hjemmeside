var express = require("express")
var app = express()
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI,  {useNewUrlParser: true})


app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index")
})

var memberSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    role: String,
    about: [String]
});

var Member = mongoose.model("member", memberSchema);

app.get("/medlemmer/:medlem", function(req, res){
       var fullName = (req.params.medlem).split("-");
       var firstName = fullName[0];
       
      Member.findOne({firstName: firstName}, function(err, member){
          if(err){
              console.log(err)
          }else {
              console.log(member)
              res.render("medlem.ejs", {member : member})
          }
      })
})






app.listen(process.env.PORT, process.env.IP, () => console.log("Server running at port " + process.env.PORT))