const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
  // write Head : first argument is status code.

// read the index.htm file.
// with utf8, we get the string in html and not binary data.

  var message = 'Hello!';

  res.writeHead(200, { 'Content-Type': 'text/html'});
// Use streams to increse performance.
  fs.createReadStream(__dirname+ '/index.htm','utf8').pipe(res);

// Now to replace a string here, it's not built into NodeJS Core.


}).listen(3001, 'localhost');
