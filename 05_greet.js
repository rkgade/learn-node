var greet = function() {
  console.log("Hello World");
};

// Another function in module, but module can export only one function
var newGreet = function() {
  console.log("RK Gade");
};

// Call greet function here.
//greet();

// export your module
module.exports = newGreet;

// Uncommenting the below will export greet function and not newGreet
//module.exports = greet;
