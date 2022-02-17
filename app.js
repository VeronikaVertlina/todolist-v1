//jshint esverion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];//<- "New Item"

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  let day = today.toLocaleDateString("en-US", options);
  res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req,res){
  let item = req.body.newItem;

  items.push(item);
  res.redirect("/");
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
