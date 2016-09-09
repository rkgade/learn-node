var obj = {
  name: 'Raj kiran',
  greet: function(parameters) {
    console.log(`Hello ${this.name}`);
  }
}

obj.greet();
// .call method. You can pass a variable to this.
// This way we can overwrite that 'this' would
// point to in the function description.
obj.greet.call({name: 'Kiran'});

// .apply method.
// Difference is , parameters are passed with comma spaced values in .call
// .apply allow pasing array as parameters
