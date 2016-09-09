// Use new ES6 Classes
'use strict';
// Helps you not make silly mistakes.
// With new features, they will be used only when strict is declared.

class Person {
  constructor(firstname, lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }
    // These methods are accessable for every object created with the class.
    greet() {
      // body...
      console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
}



var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
