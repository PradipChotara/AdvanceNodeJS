const express = require("express");
const { Worker } = require("worker_threads");

const app = express();
const port = 3000; // Port to listen on

// Define routes
app.get("/non-block", (req, res) => {
  res.send("non-block request");
});

app.get("/block", (req, res) => {
  const worker = new Worker("./workers/worker_thread.js");

  worker.on("message", (data) => {
    res.send(data);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
