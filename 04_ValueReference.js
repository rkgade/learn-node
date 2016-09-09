// Pass By Reference or Pass by Value
// Primitive is a type of data that represents a single value
// Pass by Value : Primitive
// Pass by Reference : Object

// pass by Value
function change(b) {
  b = 2;
}

var a = 1;
change(a);
// Primitive, hence b is a separate copy of a.
console.log(a);

// pass by reference
function changeObj(d){
  d.prop1 = function() {};
  d.prop2 = {};

}

var c = {};
c.prop1 = {};
// d points to the same mem location as pointed by c.
changeObj(c);
console.log(c);
