// Chapter 5- Express
//Express Routes
//Let's create an express route that accepts GET requests on '/tweets' and responds by sending back a static HTML file.
//Create a GET route for '/tweets' and give it the proper callback. The callback function should accept two arguments: the request and the response.
var express = require('express');
var app = express();
app.get('/tweets', function(response, request){});

//Send back the file tweets.html, which lives under the project's root path. Remember to use __dirname to locate tweets.html.
var express = require('express');
var app = express();
app.get('/tweets', function(request, response){
  response.sendFile(__dirname + "/tweets.html");
});
//Finally, have the express app listen on port 8080.
app.listen(8080);

//Route Params
//Let's create a route that accepts dynamic arguments in the URL path and responds with the quote from the proper author.

var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};
//Start by creating a GET route for '/quotes' that takes a name parameter as part of the URL path.
app.get('/quotes/:name', function(request, response){
 //Now, use the name parameter from the URL to retrieve a quote from the quotes object and write it out to the response. Note: No piping here, just write the quote string to the response like 
  //you did in previous levels (and then close the response).
  var name= request.params.name;
  response.send(quotes[name]);
});

app.listen(8080);

//Instead of just writing out the quote to the response, let's try using an EJS template to render the response.
//Next, make the name and the quote data available to the template.

var express = require('express');
var app = express();

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};
app.get('/quotes/:name', function(req, res) {
  var quote = quotes[req.params.name];
  res.render('quote.ejs', {
    name: req.params.name,
    quote: quote
  });
});
app.listen(8080);

//Inside quote.ejs, add the code needed to render the data you passed to the template.
<h2>Quote by <%= name %></h2>
<blockquote>
  <%= quote %>
</blockquote>

//URL Building
// Let's create a page which calls the Twitter search API and displays the last few results for Code School. 
// The first step is to construct the proper URL, which is all you need to do in this challenge.
// Complete the URL options which will be sent into the the url module's format method. 
// The URL you'll want to construct is the following: http://search.twitter.com/search.json?q=codeschool
var url = require('url');
options = {
  // add URL options here
  protocol: "http://search.twitter.com/search.json?q=codeschool",
  host: "search.twitter.com",
  pathname: "search.json",
  query: {
  q: "codeschool"
}
};
var searchURL = url.format(options);
console.log(searchURL);

//Doing the Request
// Next, we'll use the request module to make a simple web request and log the response to the console. You can use this example in the README.
var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};
var searchURL = url.format(options);
//To start, require the request module and assign the return function to a variable.
var request=require('request');
//Next, issue a request to searchURL. Remember, the callback function for the request
//function takes three arguments: error, response and body.
request(searchURL, function(error, response, body){
  //Finally, log the response body to the console using console.log().
  console.log(body);  
});


//Express Server
var url = require('url');
var request = require('request');
//Require the express module.
var express=require('express');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};
var searchURL = url.format(options);
//Create the Express server and name it app.
var app=express(); // Create server here
//Create a route for GET requests to / (root path). Remember, the callback function 
//takes two arguments: a request req and a response res.
app.get('/', function(req, res){
  //In our new route, issue a request to searchURL and pipe the results into the response.
  request(searchURL).pipe(res);
//  Finally, tell app to listen on port 8080.
}).listen(8080);

Level 6 //Setting Up socket.io Server-Side
//So far we've created an Express server. Now we want to start building a real-time Q&A moderation service and we've decided to use socket.io.
var express = require('express');
var app = express();
//(Below)Using the http module, create an new http server and pass the express app as the listener for that new server.
var server=require('http').createServer(app);
//(Below)Using the socket.io module, listen for requests on the http server. Store the return object of this operation in a variable called io.
var io= require('socket.io')(server);
//Load the socket.io.js script. The socket.io.js path you should use is '/socket.io/socket.io.js'. Express knows to serve the socket.io client js for this path.
//<script src="/socket.io/socket.io.js"></script>
// <script>
//   // use the socket.io server to connect to localhost:8080 here
//   var socket= io.connect('http://localhost:8080');
// </script>
io.on('connection', function(client){
  console.log('hello ');
});
server.listen(8080);

//Listening For Questions
//In our client below, listen for 'question' events from the server and call the insertQuestion function whenever the event fires.
//First, listen for 'question' events from the server.
server.on('question', function(question){});

//Now, have the event callback function call the insertQuestion function. 
//The insertQuestion function is already created for you, and it's placed in its own file. It expects exactly one argument - the question.
<script src="/socket.io/socket.io.js"></script>
<script src="/insertQuestion.js"></script>
<script>
  var server = io.connect('http://localhost:8080');
  // Insert code here
  server.on('question', function (question){
    insertQuestion(question);
  });
</script>


var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");
  //In the server, listen for 'question' events from clients.
  client.on('question', function(data){
  ////Now, emit the 'question' event on all the other clients connected, passing them the question data.
    client.broadcast.emit("question", data);
  });
});
server.listen(8080);

//Saving Client Data
// In our real-time Q&A app, we want to allow each client only one question at a time, but how do we enforce this rule? 
// We can use socket.io's ability to save data on the client, so whenever a question is asked, we first want to check the question_asked value on the client.

//First, when a client emits a 'question' event, we want to set the value of question_asked to true.
client.question_asked = true;

//Second, when a client emits a 'question' event, we want to broadcast that question to the other clients.
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
  console.log("Client connected...");
  client.on('question', function(question) {
    if(!client.question_asked){
    client.broadcast.emit('question', question);
    client.question_asked = true;
    }
  });
});
server.listen(8080);

//Answering Questions
// Clients can also answer each other's questions, so let's build that feature by first listening for the 'answer' event on the client, 
// which will send us both the question and answer, which we want to broadcast out to the rest of the connected clients.

// With the client, listen for the 'answer' event from clients. 
// This listener will have both a question and answer to broadcast so make sure to include both as function parameters.
client.on('answer', function(question, answer){});

//Now, emit the 'answer' event on all the other clients connected, passing them the question and answer data.
client.broadcast.emit('answer', question, answer);
//Full Example below:
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");
  // listen for answers here
  client.on('answer', function(question, answer){
    client.broadcast.emit('answer', question, answer);
  });
  client.on('question', function(question) {
    if(!client.question_asked) {
      client.question_asked = true;
      client.broadcast.emit('question', question);
    }
  });
});
server.listen(8080);

//Answering Question Client
//Now on the client, listen for the 'answer' event and then add the appropriate data to the DOM.

//Listen for the 'answer' event off of the server.
server.on('answer', function(question, answer){
});

//Call the answerQuestion function, passing in both the question and the answer that was broadcast from the server.
server.on('answer', function(question,answer){
    answerQuestion(question, answer);
  });

//Full Example below
<script src="/socket.io/socket.io.js"></script>
<script>
  var server = io.connect('http://localhost:8080');
  server.on('question', function(question) {
    insertQuestion(question);
  });
  server.on('answer', function(question,answer){
    answerQuestion(question, answer);
  }); 
  //Don't worry about these methods, just assume 
  //they insert the correct html into the DOM
  // var insertQuestion = function(question) {
  // }
  // var answerQuestion = function(question, answer) {
  // }
</script>
 