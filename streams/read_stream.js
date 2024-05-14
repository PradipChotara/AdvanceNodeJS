const fs = require('fs');

const readableStream = fs.createReadStream('example.txt');

let count = 0;
readableStream.on('data', (chunk) => {
  count++;
});

readableStream.on('end', () => {
    console.log("Total Chunks : ", count);
});
