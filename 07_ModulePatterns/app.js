var greet = require('./greet1');

// The following function name resembles the variable name above into which the function is imported.
greet();

var greet2Obj = require('./greet2');

// Print the function from greet2 Object.
greet2Obj.greet();

// Either the above one can be done or follow the below procedure.
// This can be done for greet3 and greet4 types.
var greet2 = require('./greet2').greet;
greet2();

// Third Way : Replace exports with Own object
var greet3 = require('./greet3');
greet3.greet();

// What Happens when I require the same function again and again?
greet3.greeting = 'Changed Hello World';
var greet3b = require('./greet3');
greet3b.greet();
// Please Observe that greet3 Object also points out to the newly changed value.
greet3.greet();

var Greet4 = require('./greet4');
// Create a new Object
var grtr = new Greet4();
grtr.greet();

// Not calling require anymore, using the constructor function that came back.
var grtr1 = new Greet4();
grtr1.greeting = 'Changed Greeting, however previously created objects won\'t get affected'
grtr1.greet();
// Check that grtr still retuns the same as that Object has never changed.
grtr.greet();


var greet5 = require('./greet5').greet;
greet5();

// Uncommenting the below line will print 'Change Greeting!' in the console.log .
// If commented, console.log returns 'undefined', hence proving that 'greeting'
// variable is protected in greet5.js and no outside variable like 'greet5' in app.js
// can change it.
greet5.greeting = 'Change Greeting!';
console.log(greet5.greeting);
