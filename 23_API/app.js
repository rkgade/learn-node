const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {

  res.writeHead(200, { 'Content-Type': 'application/json'});

  var obj = {
    firstname: 'Raj Kiran',
    lastname: 'Gade'
  };

// the following line prints '[object Object]' which is nothing but string representation of the Object, not the value.
// Hence use JSON methods.
  res.end(`${JSON.stringify(obj)}`);


}).listen(3001, 'localhost');
