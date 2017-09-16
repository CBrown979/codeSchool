//Building Blocks of Express - Level 1

var express = require('express'); // require express module & assign to express variable
var app = express(); // create an application instance using function assigned to express & assign to app variable

app.get('/locations', function(request, response){}); //Using our application instance, app, create a new route that 
//accepts GET requests on the /locations URL path. Remember to pass a callback function which takes a request and response.

app.get('/locations', function(request, response){
  var cityNames = ['Caspiana', 'Indigo', 'Paradise']; //Respond with an array of city names. The city names should be Caspiana, Indigo and Paradise.
  response.send(cityNames);
});
app.listen(3001); //Bind application to port 3001.

app.listen(3001, function(){
  console.log("Running Express"); //When our application is ready to receive requests, print the string "Running Express" to the console.
});

//When we run our previous code and issue a GET request to the /locations endpoint, the Content-Type header for the response be set to application/json

//If we were to craft a response sending a string of text with the response.send() function, just like the following code,
//Express would set this Content-Type to text/html
app.get('/locations', function(request, response) {
    var cities = '<ul><li>Caspiana</li><li>Indigo</li></ul>';
    response.send(cities);
});

app.get('/locations', function(request, response){}); //create new route for locations

//Now redirect from /locations to /cities path using the Moved Permanently HTTP status code (free hint for you, the code for that is 301)
response.redirect(301, '/cities');

//Full Example below:'var express = require('express');
var app = express();
app.get('/cities', function (request, response) {                                                                                                     
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});
app.get('/locations', function(request, response){
  response.redirect(301, '/cities');
});
app.listen(3001, function () {
  console.log("Running Express");
});'