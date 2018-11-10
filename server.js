//setup npm installs. not sure we will need all

var fs = require("fs");
var request = require("request");
var express = require ("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Import routes and give the server access to them.
var htmlRoute = require("./app/routing/htmlRoutes");
var apiRoute = require("./app/routing/apiRoutes");

//THIS WAS BASED OFF CHARACTER/STAR WARS EXCERCISE BUT DOESN'T SEEM TO WORK
//app.use(htmlRoute);
//app.use(apiRoute);


// Routes
// =============================================================

//examples from class excercises below
// Basic route that sends the user first to the AJAX Page

/*
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });
  
  // Displays all characters
  app.get("/api/characters", function(req, res) {
    return res.json(characters);
  });
  
  */

//port listener
app.listen(PORT, function (err) {
    if (err) throw err
    console.log('listening on port: ' + PORT)
})
