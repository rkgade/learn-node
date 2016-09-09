function Emitter() {
  this.events = {};
}

Emitter.prototype.on = function(type, listener) {
  // body...
  // events is an object, creating a new property in the object.
  // We are making an array, name will be 'type'
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

// Will be something like this:
// gotSomethingFromInternet: [function1() {} , function2() {}]

// Emit a priticular event.
// Say that something happened.
Emitter.prototype.emit = function(type) {
  // body...
  if (this.events[type]) {
      this.events[type].forEach(function(listener) {
        // body...
        listener();
      });
  }
}

module.exports = Emitter;
