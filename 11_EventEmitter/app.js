var Emitter = require('./emitter');
var emtr = new Emitter();

// Some event called Greet
// This is going to be the property name
emtr.on('greet', function() {
  console.log('Somewhere, someone said hello!');

});

emtr.on('greet', function() {
  console.log('A greeting occurred!');
});

console.log('Hello!');
// Emit the event manually.
emtr.emit('greet');

console.log(emtr.emit('greet'));
