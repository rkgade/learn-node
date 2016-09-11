// This JS file is processed by Browser, not NodeJS.
// Because angular is already loaded, angualr object is available.
// this is a named thing that has code inside it.
// Empty array is list of dependencies this module would depend on.
angular.module('TestApp', []);

angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc() {
  // this is mapped to vm mentioned in the index.ejs file.
  this.message = 'Hello';
  this.people = [
    {
      name: 'Raj'
    },
    {
      name: 'Kiran'
    },
    {
      name: 'Gade'
    }
  ]
}
