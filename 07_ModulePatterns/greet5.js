// Revealing Module Pattern
var greeting = 'Bonjour';

function greet() {
  console.log('Hello World.');
}

// module.exports is what is returned.
// Hence greeting variable can't be accessed outside greet5.
module.exports = {
  greet: greet
}
