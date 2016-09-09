// Buffers
// utf8 is default encoding
// The below statement converts 'Hello' into binary and stores the data.
var buf = new Buffer('Hello', 'utf8')

console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);
buf.write('wo');
console.log(buf.toString());
