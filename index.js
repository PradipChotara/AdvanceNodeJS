const express = require('express');
const app = express();
const port = 3000; // Port to listen on

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
