var express = require("express")
var app = express()
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI,  {useNewUrlParser: true})


app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index")
})

app.get("/index.html", function(req, res){
  res.redirect("/")
})


var memberSchema = new mongoose.Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    email: String,
    phone: String,
    img: String,
    role: String,
    linkedIn: String,
    about: [String]
});


var Member = mongoose.model("member", memberSchema);


app.get("/medlemmer/:medlem", function(req, res){
      var id = req.params.medlem
       
      Member.findOne({_id: id}, function(err, member){
          if(err){
              console.log(err)
          }else {
              res.render("medlem", {member : member})
          }
      })
})




app.listen(process.env.PORT, process.env.IP, () => console.log("Server running at port " + process.env.PORT))

