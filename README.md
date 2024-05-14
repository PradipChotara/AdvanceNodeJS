# Advance NodeJS

- [YouTube link](https://www.youtube.com/playlist?list=PL5Lsd0YA4OMGN86vWiW7O52izu-cTxcS3)

```sh
npm install
```
---
## Worker Threads
 - can run on diffrent CPU core then main thread

## - What is The use of Worker Threads?
- to handle CPU Intensive Task like Encrption/Decrption, Compress/Decompress of Data
- create worker thread and handle CPU Intensive Task in this thread, to keeps Main Thread from being   blocked

## - Why Main Thread Shouldn't be Blocked
 - all incoming requsting are first handled by main thead
  when new request comes if main thead is blocked then that request has to wait 
  so buy keeping main thead free, new reqeust can be handled immediately which improves concurrency.
- Node.js operates on a single thread(main thread),
  so if main thread gets blocked then system gets unresponsive until main thread completes it's CPU intensive Task,
  by creating another thread and handling CPU intensive task in that thread Main thread can be kept free
- if main thread is free then it can run event loop, which in turn makes system responsive by           executing asynchronous operations which are in job/task queue.

> Worker Thread & Main Thread Communicate
> by sharing memory refrences or by passing data.

---

# Clusters in Node.js

Clusters in Node.js are a mechanism for utilizing the capabilities of multi-core systems to improve performance and concurrency in applications. They enable the creation of multiple child processes (workers) that share the same server port, allowing Node.js to handle more incoming connections and distribute the workload across CPU cores effectively.

## Key Concepts

1. **Master-Worker Model:**
   - Clusters follow a master-worker model, where the main Node.js process (master) manages multiple child worker processes.
   - Each worker process runs its own instance of the Node.js event loop and can handle incoming requests independently.

2. **Scaling Across CPU Cores:**
   - Clusters are designed to scale Node.js applications across multiple CPU cores, utilizing the full processing power of the system.
   - This scalability is crucial for handling a large number of concurrent connections or performing CPU-intensive tasks efficiently.

3. **Load Balancing:**
   - The master process in a cluster manages load balancing by distributing incoming connections (HTTP requests, for example) among worker processes.
   - This helps in evenly distributing the workload and optimizing resource utilization.

4. **Inter-Process Communication (IPC):**
   - Clusters support IPC mechanisms that allow communication between the master process and worker processes.
   - IPC enables data sharing, coordination of tasks, and exchange of messages between different parts of the application.

  ---
