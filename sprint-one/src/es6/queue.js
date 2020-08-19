/* ES6 instantiation: declare classes with the keyword class

Do:
Capitalize your function name to indicate to others that it is intended to be run with the keyword new
Use the keyword new when instantiating your class
Use the keyword this in your constructor
Explicitly declare a class method named constructor
Declare all other class methods within the class declaration
Don't:
Declare the instance explicitly
Return the instance explicitly
Add class methods to the class prototype directly
*/

// var Queue = function() {
class Queue {
  // Create Queue constructor -- this.
  constructor() {
    this._storage = {};
    this._start = 0;
    this._end = 0;
  }

  // Use the keyword 'this' in your methods
  // Queue.prototype.enqueue = function(value) {
  enqueue(value) {
    this._storage[this._end++] = value;
  };

  dequeue() {
    // if (queueMethods.size() > 0) {
    if (this.size() > 0) {
      let firstElement = this._storage[this._start]
      delete this._storage[this._start];
      this._start++;
      return firstElement;
    }
  };

  size() {
    return this._end - this._start;
  };

  // return someInstance;
};


