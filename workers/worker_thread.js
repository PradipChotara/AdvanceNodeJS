const { parentPort } = require('worker_threads');

const data = "in worker thread...";

parentPort.postMessage(data);