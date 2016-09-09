// From ES6 even class can be used to create object.
// This function is like a constructor.
function Greetr() {
  this.greeting = 'Hello World from exports replaced with own object.'
  this.greet = function() {
    console.log(this.greeting);
  }
}

// Replace exprts object with Own object
// This is run only once. Results are cached.
module.exports = new Greetr();
