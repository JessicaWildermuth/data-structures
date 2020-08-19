/* Pseudoclassical instantiation: create instances with the keyword new

Do:
Capitalize your function name to indicate to others that it is intended to be run with the keyword new
Use the keyword new when instantiating your class
Use the keyword this in your constructor
Don't:
Declare the instance explicitly
Return the instance explicitly
*/

/* Queue
// A queue works like a line for an amusement park ride -- people enter at the end of the queue and leave from the front
//(FIFO: first in, first out).

enqueue(string) - Add a string to the back of the queue
dequeue() - Remove and return the string at the front of the queue
size() - Return the number of items in the queue
*/

// Pseudoclassical: create instances with the keyword new & the keyword this in your constructor
var Queue = function() {
  // generate object
    // var someInstance = {};
    // var someInstance = Object.create(queueMethods);

  // Create Queue constructor -- this.
  this._storage = {};
  this._start = 0;
  this._end = 0;

  // return someInstance;
};

//Create an object that holds the methods that will be shared by all instances of the class
  //var queueMethods = {};

// Use the keyword 'this' in your methods
Queue.prototype.enqueue = function(value) {
  this._storage[this._end++] = value;
};

Queue.prototype.dequeue = function() {
  // if (queueMethods.size() > 0) {
  if (this.size() > 0) {
    let firstElement = this._storage[this._start]
    delete this._storage[this._start];
    this._start++;
    return firstElement;
  }
};

Queue.prototype.size = function() {
  return this._end - this._start;
};


