/* Prototypal: using Object.create

Do:
Use Object.create  with the object from step 2 to create instances of your class
Don't:
Use the keyword new
*/

/* Queue
// A queue works like a line for an amusement park ride -- people enter at the end of the queue and leave from the front
//(FIFO: first in, first out).

enqueue(string) - Add a string to the back of the queue
dequeue() - Remove and return the string at the front of the queue
size() - Return the number of items in the queue
*/

// Prototypal: using Object.create & 'this' in the methods
var Queue = function() {
  // generate object
  // var someInstance = {};
  var someInstance = Object.create(queueMethods);
  // The Object.create() : creates a new object, using an existing object as the prototype of the newly created object.

  someInstance._storage = {};
  someInstance._start = 0;
  someInstance._end = 0;

  return someInstance;

};

//Create an object that holds the methods that will be shared by all instances of the class
var queueMethods = {};


// Use the keyword 'this' in your methods
queueMethods.enqueue = function(value) {
  this._storage[this._end++] = value;
};

queueMethods.dequeue = function() {
  // if (queueMethods.size() > 0) {
  if (this.size() > 0) {
    let firstElement = this._storage[this._start]
    delete this._storage[this._start];
    this._start++;
    return firstElement;
  }
};

queueMethods.size = function() {
  return this._end - this._start;
};



