var person = {
  firstname: '',
  lastname: '',
  greet: function() {
    return this.firstname+ ' '+ this.lastname;
  },
}

// Create an Object from a prototype.
// This sets up the prototype chain.
var john = Object.create(person);
var jane = Object.create(person);
console.log(john);
console.log(jane);
