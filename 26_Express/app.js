const express = require('express');
// app is a function that has properties and methods that require('express'); returns.
var app = express();

// Use Environment Variables.
var port = process.env.PORT || 5000 ;

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
  console.log('Response url'+ req.url);
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

    res.render('person',{ID : req.params.id});
});
app.get('/api', function(req, res) {
  res.json({ firstname: 'Raj Kiran ', lastname: 'Gade'})
});



// listen just creates a listener.
app.listen(port);
