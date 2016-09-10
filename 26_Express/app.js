const express = require('express');
// app is a function that has properties and methods that require('express'); returns.
var app = express();

// Use Environment Variables.
var port = process.env.PORT || 5000 ;

// several http methods exist in Express
app.get('/', function(req, res) {

    res.send('<html> <head> </head> <body>Success </body></html>');
});

app.get('/api', function(req, res) {
  res.json({ firstname: 'Raj Kiran ', lastname: 'Gade'})
})
// listen just creates a listener.
app.listen(port);
