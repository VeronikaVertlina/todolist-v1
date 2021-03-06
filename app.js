//jshint esverion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

// console.log(date());

const app = express();

const items = ["Buy Food", "Cook Food", "Eat Food"];//<- "New Item"
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){

  const day = date.getDate();

  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req,res){
  const item = req.body.newItem;

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

  // var currentDay = today.getDay();
  // var day = "";
//-------------third change
  // switch number of current day to string
  //if currentDay === 6 as day = "Saturday"
  // switch(currentDay){
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     res.render("list", {kindOfDay: day});
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     console.log("Error: current day is equel to: " + currentDay);
  // }

//----------second change
  // if(currentDay === 6 || currentDay === 0){
  //    day = "Weekend";
  //
  //   res.render("list", {kindOfDay: day[5]);
  //   // res.sendFile(__dirname + "/weekend.html");
  // }else {
  //    day = "Weekday";
  //   res.render("list", {kindOfDay: day[currentDay]});
  //   // res.sendFile(__dirname + "/weekday.html");
  // }
//---------first----------
  // if(currentDay === 6 || currentDay === 0){
  //   res.write("<h1>Yay! It's the weekend!</h1>");
  // }else {
  //   res.write("<p>It is not the weekend!</p>")
  //   res.write("<h1>Boo! I have to work!</h1>");
  //   res.send();
  // }
// });

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
