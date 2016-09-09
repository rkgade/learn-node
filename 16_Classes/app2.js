'use strict';
// Using Classes and Modules
const Greetr = require('./greeter');


var greeter1 = new Greetr();
// .on runs after emit is called out.
greeter1.on('greet', function(data) {
  console.log('Someone Greeted!: ' + data);
});

greeter1.greet('Raj Kiran');
console.log(greeter1.greeting);
