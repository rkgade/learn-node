const util = require('util');

function Person() {
  this.firstname = 'Raj';
  this.lastname = 'Gade';
}

// Only this executed when inherits is run.
Person.prototype.greet = function(arguments) {
  // body...
  console.log('Hello ' + this.firstname );
};

function Policeman(){
// Commenting the below line would result in 'undefined' result.
  Person.call(this);
  this.badgeNumber = '1234';
}
util.inherits(Policeman, Person);

var officer = new Policeman();
// At first, it would result in 'undefined.'
officer.greet();
