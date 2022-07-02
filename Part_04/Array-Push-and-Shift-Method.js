/**
 * Array Push and Shift Method
 */

const Queue = require("./Implement-A-Basic-Queue");
const queue = new Queue();
queue.enqueue("Task One");
queue.enqueue("Task Two");
queue.enqueue("Task Three");

queue.showQueue();

queue.dequeue();
queue.showQueue();

console.log(queue.nextQueue());
console.log(queue);

// JavaScript Array Queue Method
const q = [];
q.push("Task One");
q.push("Task Two");
q.push("Task Three");
console.log(q);

q.shift();
q.shift();

console.log(q);
