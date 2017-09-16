//Reading from the URL - Level 3

//City Search
//We want to create an endpoint that we can use to filter cities. Follow the tasks below to to create this new route.

//Create a new route for GET requests to '/cities'. The second argument should be a callback function which takes request and response.
app.get('/cities', function(request, response){
  
}); //From inside of our route, create an if statement that checks whether a value is set to the query string parameter search.
if(request.query.search){
    response.json(citySearch(request.query.search));
  }

//Full Example
var express = require('express');
var app = express();

var cities = ['Caspiana', 'Indigo', 'Paradise'];

app.get('/cities', function (request, response) {
  if(request.query.search){
    response.json(citySearch(request.query.search));
  }
});

function citySearch (keyword) {
  var regexp = RegExp(keyword, 'i');
  var result = cities.filter(function (city) {
    return city.match(regexp);
  });

  return result;
}
app.listen(3000);


//Dynamic Route Variables
Consider the following Dynamic Route:
app.get('/cities/:name', function (request, response) {
  // ...
})
//When requests come in for this route, how can we access the city name submitted by the user?
requests.params.name


//City Information -- Now lets look up some information about the city.
//Inside of our dynamic route, grab the name submitted by the user, lookup the city information on the cities object and assign it to the cityInfo variable.
cityInfo = cities[request.params.name];

//Check to see if cityInfo exists and if so, respond with the cityInfo in JSON format.
if (cityInfo){
    response.json(cityInfo);
  }
  
//If cityInfo does not exist, respond with a 404 HTTP status code and a JSON message that says "City not found".
else{
    response.status(404);
    response.json("City not found");
  }
  
//Full Example:
var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};
app.get('/cities/:name', function (request, response) {
  var cityInfo;
  cityInfo = cities[request.params.name];
  if (cityInfo){
    response.json(cityInfo);
  }else{
    response.status(404);
    response.json("City not found");
  }
});
app.listen(3000);


// //Flexible Routes 
// Our current route only works when the city name argument matches exactly the properties in the cities object. This is a problem. 
// We need a way to make our code more flexible.

//Inside our route, call the parseCityName() function passing in the name parameter. 
//Assign the return value to the new variable called cityName.
var cityName; 
  cityName = parseCityName(request.params.name);

//Now, using the city name returned from the parseCityName() function, lookup the corresponding description using the cities object 
//and store it in the correct variable that will make the rest of the function work as intended.
var cityInfo = cities[cityName];

var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};

//Full Example:
app.get('/cities/:name', function (request, response) {
  var cityName; 
  cityName = parseCityName(request.params.name);
  var cityInfo = cities[cityName];
  if(cityInfo) {
    response.json(cityInfo);
  } else {
    response.status(404).json('City not found');
  }
});
function parseCityName(name) {
  var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return parsedName;
}
app.listen(3000);

//app.param() is the Express function that maps placeholders to callback functions, and is commonly used for running pre-conditions 
//on Dynamic Routes


//Dynamic Routes II
// Whenever we use our name parameter we want to parse it a specific way. Let's clean up our existing code so that all routes with a 
// name parameter get the same special handling.

//Call app.param() to intercept requests that contain an argument called 'name'. Remember app.param() takes a callback function as 
//its second argument, which uses the same signature as a middleware.
app.param('name', function(request, response, next){});

//Inside the app.param() callback function, call the parseCityName() function with the submitted name parameter. Set the return 
//value to a new property in the request object called cityName.
request.cityName = parseCityName(request.params.name);
  next();
  
//Full Example:
var express = require('express');
var app = express();

var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};
app.param('name', function(request, response, next){
  request.cityName=parseCityName(request.params.name);  
  next();
});
app.get('/cities/:name', function (request, response) {
  var cityInfo = cities[request.cityName];
  if(cityInfo) {
    response.json(cityInfo);
  } else {
    response.status(404).json("City not found");
  }
});
function parseCityName(name){
  var parsedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return parsedName;
}
app.listen(3000);


// //Dynamic Routes III
// The following code has a Dynamic Route that takes a year as an argument and returns the city created in that year. The problem with 
// our current implementation is that it breaks when invalid data is sent on client requests. Let's add some basic validation.

//Call a function that intercepts Dynamic Routes with the 'year' param.
app.param('year', function(request, response, next){});

//Inside of that function, use the isYearFormat() function to check whether the year parameter is in a valid format. 
//If so, then move processing to the next function in the stack.
if (isYearFormat(request.params.year)){
    next();
  }
  
//If the year parameter is not in a valid format, then respond with a 400 HTTP status code and a JSON message 'Invalid Format for Year'.
else {
    response.status(400).json('Invalid Format for Year');
  }
  

//Full Example:
var express = require('express');
var app = express();
app.param('year', function(request, response, next){
  if (isYearFormat(request.params.year)){
    next();
  }else {
    response.status(400).json('Invalid Format for Year');
  }
});
var citiesYear = {
  5000: 'Lotopia',
  5100: 'Caspiana',
  5105: 'Indigo',
  6000: 'Paradise',
  7000: 'Flotilla'
};
function isYearFormat(value) {
  var regexp = RegExp(/^d{4}$/);
  return regexp.test(value);
}
app.get('/cities/year/:year', function(request, response) {
  var year = request.params.year;
  var city = citiesYear[year];

  if(!city) {
    response.status(404).json("No City found for given year");
  } else {
    response.json("In " + year + ", " + city + " is created.");
  }
});
app.listen(3000);                                                                                                                                                                                                                                                                                                       

