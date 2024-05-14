const fs = require('fs');

const readableStream = fs.createReadStream('example.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.pipe(writableStream);
