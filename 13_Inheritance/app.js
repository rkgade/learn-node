const EventEmitter = require('events');
const util = require('util');

function Greetr() {
  // This is equivalent to Super Constructor.
  EventEmitter.call(this);
  this.greeting = 'Hello'
}

util.inherits(Greetr, EventEmitter);

// creating a new prototype for Greetr.
Greetr.prototype.greet = function(data) {
  // body...
  console.log(this.greeting +': '+data);
  this.emit('greet', data);
};


var greeter1 = new Greetr();
// .on runs after emit is called out.
greeter1.on('greet', function(data) {
  console.log('Someone Greeted!: ' + data);
});

greeter1.greet('Raj Kiran');
console.log(greeter1.greeting);
