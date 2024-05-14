const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, ');
writableStream.write('Node.js!');
writableStream.end();

//data is written in chunks using write() method, and end() is called to indicate the end of writing.