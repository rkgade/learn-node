const express = require('express');

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');
// app is a function that has properties and methods that require('express'); returns.
var app = express();

// Use Environment Variables.
var port = process.env.PORT || 2001 ;


// static files and middleware.
// What should happen between request and response.
// how will style.css will get downloaded when requested?
app.use('/assets', express.static(__dirname+'/public'));

// Set View Engine ( Template Engine)
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// htmlController
htmlController(app);
// Calling apiController
apiController(app);

// listen just creates a listener.
app.listen(port);
