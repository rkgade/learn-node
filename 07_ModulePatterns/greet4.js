function Greetr() {
  this.greeting = 'Hello World from not using require but the constructor function .'
  this.greet = function() {
    console.log(this.greeting);
  }
}

// Give back the ability to create new Objects and not return one Object.
module.exports = Greetr;
