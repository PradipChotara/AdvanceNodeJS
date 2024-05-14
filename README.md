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
