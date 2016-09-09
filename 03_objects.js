var firstObject = { Street: 'Main',
                    Number: 100,
                  Apartment:
                {
                  Floor: 3,
                  Number: 301,
                }
              };
// Just Print Above Object
//console.log(firstObject);


var person = {
  firstName : 'John',
  lastName : 'Doe',
  greet: function(){
    console.log('Hello, '+this.firstName + ' ' + this.lastName);
  }
};

person.greet();

// Another way to access methods of an object
console.log(person['firstName']);
