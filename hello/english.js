var greetings = require('./greetings.json');


// One way of printing Data
var greet = function() {
  console.log(greetings.en);
}

// Uncommenting below line, exports function
module.exports = greet;
