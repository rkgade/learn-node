// Size has to be in Bytes
// This stores raw binary data
// This is a new V8 feature and not of NodeJS
var buffer = new ArrayBuffer(8);
// View is a typed array
// view is a way to alter buffer binary data
var view = new Int32Array(buffer);
// Hence, we can now store two numbers in this view.
view[0]= 5;
view[1]= 10;
// Following value is not stored.
view[2]= 30;

console.log(view);
