const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// console.log("Number of CPU cores : ", numCPUs);

if (cluster.isMaster) {
  // Fork workers equal to the number of CPU cores
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();

		// Send a message to the worker
    worker.send(`Hello Worker ${worker.id}`);
  }

  cluster.on('fork', (worker) => {
    console.log(`Worker ${worker.id} forked`);
  });

  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.id} is online`);
  });  

  cluster.on('listening', (worker, address) => {
    console.log(`Worker ${worker.id} is listening on ${address.address}:${address.port}`);
  });  

  cluster.on('message', (worker, message, handle) => {
    console.log(`Message received from worker ${worker.id}: ${message}`);
  });  

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
}
else {
	// Listen for messages from the master process
  process.on('message', (message) => {
    console.log(`Message received from Master: ${message}`);
  });

	// Send a message back to the master process
	process.send(`Hello Master, this is Worker ${process.pid}`);
}