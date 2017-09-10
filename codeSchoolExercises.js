//Event Emitters - Level 2

//We're going to create a custom chat EventEmitter.
//Create a new EventEmitter object and assign it to a variable called 'chat'.
var events = require('events');
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();

//Next, let's listen for the 'message' event on our new chat object. Remember to add a callback that accepts the message parameter.
//Log the message to the console using console.log().
chat.on('message', function(message){
  console.log(message);
});

//On the chat object, emit the 'join' event and pass in a custom message as a string.
chat.emit('join', "Whaddup");

//Now emit the 'message' event on the chat object. Just like before, remember to pass in a custom message as a string.
chat.emit('message', "MillyRock");

// Just like you saw in the video, refactor the HTTP server code to explicitly bind a callback to the 'request' event using the on function.
// Add an event listener on the server variable that listens to the request event. The event listener should take a callback function with two arguments, request and response.
// var http = require('http');
// var server = http.createServer(function(request, response) {
//   response.writeHead(200);
//   response.write("Hello, this is dog");
//   response.end();
// });
server.on('request', function(request, response){});
// server.listen(8080);

// Move the logic for handling the request from the http.createServer() callback to your new 'request' event listener. 
// Remember to remove the http.createServer() callback once the code has been moved.
// Remove the original request callback.
var http = require('http');
var server = http.createServer();
server.on('request', function(request, response){
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.listen(8080);

//Add a second 'request' handler to the HTTP server.
server.on('request', function(request, response){});

//From inside of the new handler, log the message "New request coming in..." using console.log().
// var http = require('http');
// var server = http.createServer();
// server.on('request', function(request, response) {
//   response.writeHead(200);
//   response.write("Hello, this is dog");
//   response.end();
// });
server.on('request', function(request, response){
  console.log("New request coming in...");
});
// server.listen(8080);


//Like our parents always used to say, listening is more important than talking! Modify the server so that we know when it's closed down.
//Listen for the 'close' event on the server. The event listener should take a callback function that accepts no arguments.
server.on('close', function(){});

//Inside the 'close' callback, log the message "Closing down the server...".
// var http = require('http');
// var server = http.createServer();

// server.on('request', function(request, response) {
//   response.writeHead(200);
//   response.write("Hello, this is dog");
//   response.end();
// });
// server.on('request', function(request, response) {
//   console.log("New request coming in...");
// });
server.on('close', function(){
  console.log("Closing down the server...");
});
// server.listen(8080);
