var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200); 
  response.write("Hello, this is Candice");
  response.end();
}).listen(8080);

//Current Blocking below
var fs = require('fs');
var contents = fs.readFileSync('index.html');
console.log(contents);

//Converted Non-Blocking below - same example as above
var fs = require('fs');
fs.readFile('index.html', function(error, contents){
  console.log(contents);
});

//Type help to see the help menu
$ node file_read.js
// output - <html><p>Hello, this is Dog</p></html>
Congratulations, you're correct!

//Read file in server
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html', function(error, contents){
  response.write(contents); 
    response.end();
  });
}).listen(8080);


//Issuing a Request using curl -- curl https

//Writing Response Headers
var http = require('http');
var fs = require('fs');
http.createServer(function(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  fs.readFile('index.html', function(err, contents) {
    response.write(contents);
    response.end();
  });
}).listen(8080);

//Response End
var http = require('http');
http.createServer(function(request, response) {
  response.writeHead(200);
  response.end("Hello, this is dog");
}).listen(8080);




