const http = require('http');
const fs = require('fs');
// Without Using Routes, every url that requests data, gets the same response.
http.createServer(function(req, res) {

  if (req.url === '/') {
    fs.createReadStream(__dirname+ '/index.htm').pipe(res)
  }
  else if ( req.url === '/api'){
      res.writeHead(200, { 'Content-Type': 'application/json'});

      var obj = {
        firstname: 'Raj Kiran',
        lastname: 'Gade'
      };
     res.end(`${JSON.stringify(obj)}`);
  }
  else {
      res.writeHead(404);
      res.end();
  }




}).listen(3001, 'localhost');
