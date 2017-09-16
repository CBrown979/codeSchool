//Building Blocks of Express - Level 2

//Mounting Middleware
//Given an application instance is set to the app variable, what following function call would you use to mount a middleware 
//called logger --> app.use(logger) 

//Default Middleware
//The only middleware that's shipped with Express 4 is express-static

//Express Static
//Change the code in app.js to use the express-static middleware instead of the response.sendFile() function.
//The example was:
var express = require('express');
var app = express();

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});
app.get('/cities', function(req, res){
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  res.send(cities);
});
app.listen(3001);

//Will now remove our app.get() containing the root '/' route. -- updated example below, after mounting the static middleware and 
//serving files under the public directory --> app.use(express.static('public'));
//Results:
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/cities', function(req, res){
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  res.send(cities);
});
app.listen(3001);

//Script Tags
//Within index.html include jquery.js & client.js using script tags
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Cities</title>
// </head>
// <body>
//   <h1>Cities</h1>
//   <ul class='city-list'></ul>

  <script src="jquery.js"></script>
  <script src="client.js"></script> 

// </body>
// </html>

//from within client.js, complete the code for the $.get function so that it calls the /cities URL path, and then runs the appendToList function
//The first argument should be the /cities and the second should be appendToList.

// $(function(){

  $.get('/cities', appendToList); 

//   function appendToList(cities) {
//     var list = [];
//     for(var i in cities){
//       list.push($('<li>', { text: cities[i] }));
//     }
//     $('.city-list').append(list);
//   }
// });


//Logging Middleware
//On the response object, listen to the event that's emitted when the response has been handed off from Express to the underlying Operating System.
response.on('finish', function(){});

//Inside of the finish callback, calculate the duration of the request by subtracting the startTime from a new Date object. 
//Store the duration in the duration variable, which has already been declared for you.
// module.exports = function (request, response, next) {
//   var startTime = +new Date();
//   var stream = process.stdout;
//   var duration = null;

  response.on('finish', function () {
     duration = +new Date() - startTime;
  });
// };

//Using the stream object, which holds a reference to standard out, 
//write the following message: "This request took ____ ms", where ____ is the duration for the request.
stream.write("This request took " + duration + " ms");

//If we run the code as is, the request will be stuck in our middleware. Call the function that moves processing to the next middleware in the stack.
next();

//Full Example below:
module.exports = function (request, response, next) {
  var startTime = +new Date(); //the plus sign converts dateObject to milliseconds
  var stream = process.stdout;
  var duration = null;

  response.on('finish', function () {
    duration = +new Date() - startTime;
    stream.write("This request took " + duration + " ms");
  });
  next();
};

//Add Logging Middleware
In the following code in app.js, we require our new middleware and assign it to a variable called logger.
var express = require('express');
var app = express();
var logger = require('./logger');

//TODO: mount middleware
app.use(logger)
//is the function  we call in order to mount the middleware and add it to the stack

app.listen(3000);


//Only GET -- Let's build a middleware that ensures only GET requests are allowed to go through.
//First, in the only_get.js file, create an anonymous function that uses the middleware signature and assign it to module.exports. 
//Remember, the Express middleware function signature takes three arguments.
module.exports = function(request, response, next){};

//Use the request object to check if the HTTP method used is 'GET' and if it is, then call the function that moves processing 
//to the next middleware in the stack.
if(request.method === 'GET') {
    next();
};
//If the HTTP method is not 'GET', then complete the request by sending back a message that says 'Method is not allowed'.
else {
    response.send('Method is not allowed');
  };

//Full Example
module.exports = function(request, response, next){
  if(request.method === 'GET') {
    next();
  }else {
    response.send('Method is not allowed');
  }
};

//Buildings
var express = require('express');
var app = express();

app.use(function(request, response, next){
  if (request.path === "/cities"){
    next();
  } else {
    response.status(404).json("Path requested does not exist");
  }
});

app.get('/cities', function(request, response){
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.json(cities);
});

app.listen(3000);

//When we run our previous code and issue a GET request to the /buildings endpoint, the response will be a 404 response with
//Path requested does not exist

