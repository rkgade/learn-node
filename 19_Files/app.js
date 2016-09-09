const fs = require('fs');
// give the full path of the file. Encoding can also be passed.
// This is Synchronous approach to read the file.
// Waits until the file read is done.
// If there are several simultaneous user, then they will be blocked.
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

// Error first callback
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
  console.log(data);
});

// This line is printed before the callback function.
console.log('DONE!');
