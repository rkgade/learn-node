const express = require('express');

var app = express();
// Use Environment Variables.
var port = process.env.PORT || 3000 ;

app.use('/assets', express.static(__dirname+'/public'));

// Set View Engine ( Template Engine)
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});


// listen just creates a listener.
app.listen(port);
