// Chapter 3 - Streams
var fs = require('fs');

var file = fs.createReadStream('fruits.txt');

file.on('readable', function(){
  var chunk;
  while(null !== (chunk = file.read())){
    console.log(chunk.toString());
  }
});
// Inside the callback, read the data chunks from the stream and print them to the 
// console using console.log() - you might want to use a while loop to do this. 
// Don't forget to call toString() on the data before printing it.

//File Piping
//Instead of manually listening for the 'readable' event on the Readable stream, let's use pipe to read from the stream and write directly to process.stdout.
var fs = require('fs');
var file = fs.createReadStream('fruits.txt');
file.pipe(process.stdout);