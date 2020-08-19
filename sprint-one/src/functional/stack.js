/*
Functional
Do:
Define all functions and properties within the maker function
Don't:
Use the keyword new, the keyword this, or any prototype chains
Capitalize the maker function name
*/

/* Stack
A stack works like a stack of plates -- plates are added and removed from the the top of the stack
(LIFO: last in, first out).

push(string) - Add a string to the top of the stack
pop() - Remove and return the string on the top of the stack
size() - Return the number of items on the stack
*/


var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;


  // Implement the methods below
  someInstance.push = function(value) {
    storage[length++] = value
  };

  someInstance.pop = function() {
    if (length > 0) {
      let popedItem = storage[length];
      delete storage[length];
      length--;
      return storage[length];
    }
  };

  someInstance.size = function() {
    return length;
  };

  return someInstance;
};
