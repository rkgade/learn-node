const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
  // write Head : first argument is status code.
  res.writeHead(200, { 'Content-Type': 'text/html'});
// read the index.htm file.
// with utf8, we get the string in html and not binary data.
  var html = fs.readFileSync(__dirname+ '/index.htm','utf8');
  var message = 'Hello!';
  // templates
  html = html.replace('{Message}',message);
  console.log(html);
//  res.write('How are you?');
  res.end(`${html}`);


}).listen(3001, 'localhost');
