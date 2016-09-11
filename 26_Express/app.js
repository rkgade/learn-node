const express = require('express');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');
// app is a function that has properties and methods that require('express'); returns.
var app = express();

// Adding MySQL DB Connections.
const mysql = require('mysql');
// connect to MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/adressbook');

var Schema = mongoose.Schema;

var personSchema = new Schema({
  firstname: String,
  lastname: String,
  address: String
});

// This is a function constructor.
var Person = mongoose.model('Person', personSchema);

// Create instances using the constructor.

var john = Person({
  firstname: 'Raj Kiran',
  lastname: 'Gade',
  address: 'Vizag'
});

// save the user
john.save(function(err) {
  if (err) throw err;
  console.log('Person Saved!!!');
});


var jane = Person({
  firstname: 'Rakesh',
  lastname: 'Gade',
  address: 'Vizag'
});

// save the user
jane.save(function(err) {
  if (err) throw err;
  console.log('Person Saved!!!');
});
// Use Environment Variables.
var port = process.env.PORT || 3000 ;


// static files and middleware.
// What should happen between request and response.
// how will style.css will get downloaded when requested?
app.use('/assets', express.static(__dirname+'/public'));

// Set View Engine ( Template Engine)
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// own middleware
// loggers can help here.
app.use('/', function(req, res, next){
 console.log('Response url'+ req.url);

  var conn = mysql.createConnection({
    host: '<hostname>',
    user: '<username>',
    password: '<password',
    database: '<database>'
  });

  conn.query('query', function(err, rows) {
      if (err) throw err;
      // Check what mysql node package returns instead of tabular data.
      rows.forEach(elem => {
        // body...
        console.log(elem);
      });
    }
  );

  // MySQL done, MongoDB begins.
  // get all users
  Person.find({}, function(err, users) {
    if (err) throw err;
    users.forEach(elem => {
      // body...
      console.log(elem);
    });
  });

  // this means, run the next middleware.
  next();
});

// htmlController
htmlController(app);
// Calling apiController
apiController(app);

// listen just creates a listener.
app.listen(port);
