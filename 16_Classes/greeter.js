const EventEmitter = require('events');

// How to make sure EventEmitter constructor is called? (super keyword)
module.exports = class Greetr extends EventEmitter {
  constructor() {
    super();
    this.greeting = 'Hello'
  }

  greet(data){
    console.log(`${this.greeting} : ${data}`);
    this.emit('greet', data);
  }
}
