// Inbuilt modules can be imported.
// Custom Modules have specific locations and
// hence path will have ./ .
const util = require('util');
var name = 'Raj';
var greeting = util.format('Hello, %s', name);

util.log(greeting);
