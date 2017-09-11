// Chapter 3 - Streams

//Lets use the fs module to read a file and log its contents to the console.
//Use the fs module to create a Readable stream for fruits.txt. Store the new stream in a variable called file.
var file = fs.createReadStream('fruits.txt');

//Next, listen to the readable event on the newly created stream and give it a callback.
file.on('readable', function(){});

// Inside the callback, read the data chunks from the stream and print them to the console using console.log() - 
// you might want to use a while loop to do this. Don't forget to call toString() on the data before printing it.
// var fs = require('fs');
// var file = fs.createReadStream('fruits.txt');
file.on('readable', function(){
  var chunk = null; 
  while (null !== (chunk = file.read())){
    console.log(chunk.toString());
  }
});
// Instead of manually listening for the 'readable' event on the Readable stream, let's use pipe to read from the stream and write directly to process.stdout.
// Start by removing the code for the readable handler.
var fs = require('fs');
var file = fs.createReadStream('fruits.txt');
file.pipe(process.stdout);

//The following code will throw an error because pipe automatically closed our writable stream.
var fs = require('fs');
var file = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

file.pipe(process.stdout);

file.on('end', function(){
  destFile.end('Finished!');
});

//You'll need to consult the pipe documentation to figure out the option which keeps the Write stream open and dispatches the end event.
// var fs = require('fs');
// var file = fs.createReadStream('origin.txt');
// var destFile = fs.createWriteStream('destination.txt');
file.pipe(destFile, { end: false });

file.on('end', function(){
  destFile.end('Finished!');
});
// From Documention
// By default, stream.end() is called on the destination Writable stream when the source Readable stream emits 'end', so that the destination is no longer writable. 
// To disable this default behavior, the end option can be passed as false, causing the destination stream to remain open, as illustrated in the following example:

// reader.pipe(writer, { end: false });
// reader.on('end', () => {
//   writer.end('Goodbye\n');
// });
// One important caveat is that if the Readable stream emits an error during processing, the Writable destination is not closed automatically. 
// If an error occurs, it will be necessary to manually close each stream in order to prevent memory leaks.

// Note: The process.stderr and process.stdout Writable streams are never closed until the Node.js process exits, regardless of the specified options.


//Let's create an HTTP server that will serve index.html.
var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  var file = fs.createReadStream('index.html');
}).listen(8080);


//Instead of manually listening for the 'readable' event on the Readable stream, let's use pipe to read from the stream and write directly to process.stdout.
var fs = require('fs');
var file = fs.createReadStream('fruits.txt');
file.pipe(process.stdout);
file.pipe('readable', function(){});

