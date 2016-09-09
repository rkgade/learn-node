const fs = require('fs');

var readable = fs.createReadStream(__dirname + '/greet.txt', {encoding: 'utf8', highWaterMark: 32 * 1024});

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// Will start reading the file, starts filling the buffer.
// If size of file > buffer, then read the file in chunks.
// As and when buffer if full, listener function if called.
// Stream is event emitter, listen for data event.
readable.on('data', function(chunk) {
  console.log(chunk);
  writable.write(chunk);
});
