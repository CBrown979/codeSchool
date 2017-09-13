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