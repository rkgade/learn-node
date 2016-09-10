const express = require('express');
const bodyParser = require('body-parser');

// app is a function that has properties and methods that require('express'); returns.
var app = express();

// Use Environment Variables.
var port = process.env.PORT || 2001 ;

// body-parser urlencodedParser
var urlencodedParser = bodyParser.urlencoded({extended: false});
//console.log(bodyParser);
var jsonParser = bodyParser.json();
console.log(jsonParser);

// static files and middleware.
// What should happen between request and response.
// how will style.css will get downloaded when requested?
app.use('/assets', express.static(__dirname+'/public'));

// Set View Engine ( Template Engine)
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
// own middleware
// loggers can help here.
app.use('/', function(req, res, next){
//  console.log('Response url'+ req.url);
  // this means, run the next middleware.
  next();
});
// several http methods exist in Express
app.get('/', function(req, res) {
    res.render('index');
});

// Passing variable via a route.
// : says that id can be anyting.
// This also helps to poll data using URL.
app.get('/person/:id', function(req, res) {
    // Now query object will be empty if there is no query string.
    // the string mentioned after req.query should be present in the URL.
    res.render('person',{ID : req.params.id, Qstr: req.query.qstring});
});

app.post('/person', urlencodedParser, function(req, res) {
  res.send('Thank you!');
  console.log(req.body);
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res) {
  res.send('Thank you for the JSON Data');
  console.log('Printing JSON values');
  console.log(req.body);
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.get('/api', function(req, res) {
  res.json({ firstname: 'Raj Kiran ', lastname: 'Gade'})
});


// listen just creates a listener.
app.listen(port);
