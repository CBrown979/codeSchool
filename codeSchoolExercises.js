// Chapter 4 - Modules

//Notice the two different files: high_five.js on the left side and app.js on the right. 
//The code as it's written will not work, high_five.js isn't exporting anything.
//Add the proper exports line to have a successful high five!
var highfive = function() {
  console.log("smack!!");
};
module.exports = highfive;


//Notice the app.js file with the myRequest function below. Let's refactor myRequest out to its own my_request.js module.
//Move the myRequest function and the http require into my_request.js
app.js

var myRequest = require('./my_request');

myRequest('Hello, this is dog.');

my_request.js

var http = require('http');

var myRequest = function(message) {
  var request = http.request('http://codeschool.com', function(response) {
    response.pipe(process.stdout, { end: false });
  });

  request.write(message);
  request.end();
};
module.exports = myRequest;


//Require the my_request.js module in app.js.
//Here's one possible answer.
my_request.js
var http = require('http');
var myRequest = function(message) {
  var request = http.request('http://codeschool.com', function(response) {
    response.pipe(process.stdout, { end: false });
  });

  request.write(message);
  request.end();
};
module.exports = myRequest;

app.js
var myRequest = require('./my_request');
myRequest('Hello, this is dog.');


//below code in logger.js file
var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};
  
//In the logger.js file, export the info function so we can use it in app.js by assigning it to the exports object.
exports.info = info;

//In the logger.js file, export the warn function so we can use it in app.js by assigning it to the exports object.
exports.warn = warn;

//In the logger.js file, export the error function so we can use it in app.js by assigning it to the exports object.
exports.error = error;


//Dependency
//Add two dependencies to our package.json file, connect and underscore. We'll want to use version 2.1.1 of connect and version 1.3.3 of underscore.
//Add the connect dependency to package.json
//Add the underscore dependency to package.json
{
  "name": "My Awesome Node App",
  "version": "1",
  "dependencies": {
    "connect": "2.1.1",
      "underscore": "1.3.3"    
  }
}

//Semantic Versioning
//We want to make sure we are always up-to-date with the most recent patch-level changes to our dependencies when we run npm install.
//Update the connect version on package.json to fetch the latest patch-level changes. 
//All we have to do is add one character to the beginning of the version number. -- you have to add the tilda ~
//and the underscore version on package.json to fetch the latest patch-level changes.
{
  "name": "My Awesome Node App",
  "version": "1",
  "dependencies": {
    "connect": "~2.2.1",
    "underscore": "~1.3.3"
  }
}

