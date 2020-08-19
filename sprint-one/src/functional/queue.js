/*
Functional
Do:
Define all functions and properties within the maker function
Don't:
Use the keyword new, the keyword this, or any prototype chains
Capitalize the maker function name
*/

/* Queue
// A queue works like a line for an amusement park ride -- people enter at the end of the queue and leave from the front
//(FIFO: first in, first out).

enqueue(string) - Add a string to the back of the queue
dequeue() - Remove and return the string at the front of the queue
size() - Return the number of items in the queue
*/

var Queue = function() {
   // generate object
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // set the start index & end index
  var start = 0;
  var end = 0;

  // Implement the methods below

  // Functional - Define all functions and properties within the maker function
  someInstance.enqueue = function(value) {
    storage[end++] = value;
  };

  someInstance.dequeue = function() {
    if (someInstance.size() > 0) {
      let firstElement = storage[start]
      delete storage[start];
      start++;
      return firstElement;
    }
  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};
