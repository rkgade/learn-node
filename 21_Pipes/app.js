const fs = require('fs');
const zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// Creating a compressed file, also a read/write stream.
// It also compresses the chunk it gets.
var gzip = zlib.createGzip();

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

// pipe sets up an evnet listener to listen to the chunk of data read.
// pipe also returns the writable.
// Hence, for duplex connections, you can append .pipe
readable.pipe(writable);
// the following syntax is called 'chaining'.
// if it returns the parent Object, then it's called cascading.
readable.pipe(gzip).pipe(compressed);
