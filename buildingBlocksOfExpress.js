// POST Requests - Level 4

//Parser Setup
//Assume the body-parser middleware is installed. Now, let's use it in our Express application.

//Require the body-parser npm module and assign it to a variable called bodyParser.
var bodyParser = require('body-parser');

//The body-parser middleware offers different parsing options. On the bodyParser object, call a function that returns a parser for 
//URL encoded data and store it in a variable called parseUrlencoded. Remember to pass in an option which forces the use of the 
//native querystring Node library.
var parseURLencoded = bodyParser.urlencoded({extended: false});

//Mount the parser only in the post route.
app.post('/cities', parseUrlencoded, function (request, response) { //just added parseUrlencoded as 2nd parameter in existing example
  var city;
});

//Read the name and description parameters from the payload of the POST request, and pass them as arguments to the createCity 
//function (we've created this one for you). Store the return value on the city variable.
var city = createCity(request.body.name, request.body.description);

//Finally, respond back to the client with a 201 HTTP status code and the value stored in city in JSON format using json.
response.status(201).json(city);

//Full Example:
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false});

app.post('/cities', parseUrlencoded, function (request, response) {
  var city = createCity(request.body.name, request.body.description);
  response.status(201).json(city);
});
app.listen(3000);

var createCity = function(name, description){
  cities[name] = description;
  return name; 
};

//Validation
//The way that it is now, we are allowing new cities to be created with a blank description. 
//Let's add some validation so that in order for a city to be created, its description must have a string length greater than 4.

//Add an if block that checks for a description.length greater than 4, and move our city creation logic into that block. 
//Use json() to send the results from createCity back to the client.
var newCity = request.body;
  var city;
  if (newCity.description.length > 4) {
     city = createCity(newCity.name, newCity.description);
     response.status(201).json(city); 
  }
  
//If description does not match its minimum length requirements, then set a 400 status code (Bad Request) to the response, and 
//set the response body to Invalid City using json().
else {
    response.status(400).json('Invalid City');
  }

//Full Example
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.post('/cities', parseUrlencoded, function (request, response) {
  var newCity = request.body;
  var city;
  if (newCity.description.length > 4) {
     city = createCity(newCity.name, newCity.description);
     response.status(201).json(city); 
  } else {
    response.status(400).json('Invalid City');
  }
});
app.listen(3000);


//DELETE Requests
//Create a Dynamic Route for deleting cities and handle for cities that are not in our list.

//Create a DELETE route that takes the city name as its first argument, followed by a callback that takes a request and response objects as arguments.
app.delete('/cities/:name', function(request, response){});

//Use the built-in JavaScript operator delete (see MDN docs) to remove the property for the city passed as an argument. 
//Don't forget to use the attribute set in app.param() to look the city up.
delete cities[request.cityName];

//Use sendStatus() to respond back with a status code of 200.
response.sendStatus(200);

//Add an if block that checks whether the cityName provided from app.param() has a valid entry before attempting to delete it 
//from the cities object. If a valid city is not found, then respond with a 404 HTTP status code using the sendStatus() function.
if(cities[request.cityName]){
        delete cities[request.cityName];
    response.sendStatus(200);
    } else {
        response.sendStatus(404);
    }
//Full Example
var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};
app.param('name', function (request, response, next) {
  request.cityName = parseCityName(request.params.name);
});
       
app.delete('/cities/:name', function(request, response){
    if(cities[request.cityName]){
        delete cities[request.cityName];
    response.sendStatus(200);
    } else {
        response.sendStatus(404);
    }
});
app.listen(3000);

function parseCityName(name) {
  var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return parsedName;
}


//Delete Route
//Create a Dynamic Route for deleting cities and handle for cities that are not in our list.

//Create a DELETE route that takes the city name as its first argument, followed by a callback that
//takes a request and response objects as arguments.
app.delete('/cities/:name', function(request, response){});

//Use the built-in JavaScript operator delete (see MDN docs) to remove the property for the city passed as an argument. 
//Don't forget to use the attribute set in app.param() to look the city up.
delete cities[request.cityName];

//Use sendStatus() to respond back with a status code of 200.
response.sendStatus(200);

//Add an if block that checks whether the cityName provided from app.param() has a valid entry before attempting to delete it from 
//the cities object. If a valid city is not found, then respond with a 404 HTTP status code using the sendStatus() function.
if(cities[request.cityName]){
        delete cities[request.cityName];
    response.sendStatus(200);
    } else {
        response.sendStatus(404);
    }