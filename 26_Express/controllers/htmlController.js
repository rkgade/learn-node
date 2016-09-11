module.exports= function(app){

  const bodyParser = require('body-parser');
  // body-parser urlencodedParser
  var urlencodedParser = bodyParser.urlencoded({extended: false});
  //console.log(bodyParser);
  var jsonParser = bodyParser.json();



  // several http methods exist in Express
  app.get('/', function(req, res) {
      res.render('index');
  });

  // Passing variable via a route.
  // : says that id can be anyting.
  // This also helps to poll data using URL.
  app.get('/person/:id', function(req, res) {
      // Now query object will be empty if there is no query string.
      // the string mentioned after req.query should be present in the URL.
      res.render('person',{ID : req.params.id, Qstr: req.query.qstring});
  });

  app.get('/person', urlencodedParser, function(req, res) {
    res.send('Thank you!');
    console.log(req.body);
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });

  app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank you for the JSON Data');
    console.log('Printing JSON values');
    console.log(req.body);
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });


  app.post('/person', urlencodedParser, function(req, res) {

    res.send('Thank you!');
    console.log(req.body);
    console.log(req.body.firstname);
    console.log(req.body.lastname);
  });
}
