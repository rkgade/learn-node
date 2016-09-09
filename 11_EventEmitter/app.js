// Edit require to './emitter' to execute the on and emit functions from emitter.js file.
var Emitter = require('events');
var emtr = new Emitter();
const eventConfig = require('./config').events;
// Some event called Greet
// This is going to be the property name
// Don't use magic strings like 'greet'
emtr.on(eventConfig.GREET, function() {
  console.log('Somewhere, someone said hello!');

});

emtr.on(eventConfig.GREET, function() {
  console.log('A greeting occurred!');
});

console.log('Hello!');
// Emit the event manually.
emtr.emit(eventConfig.GREET);
