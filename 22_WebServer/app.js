const http = require('http');

http.createServer(function(req, res) {
  // write Head : first argument is status code.
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  console.log(req);
  res.write('How are you?');
  res.end('Hello World \n');
  console.log(res);

}).listen(3001, 'localhost');
