/* Functional-shared
Do:
Create an object that holds the methods that will be shared by all instances of the class
Use _.extend  to copy the methods onto the instance
Use the keyword 'this' in your methods
Don't:
Use the keyword new or prototype chains
*/

/* Stack
A stack works like a stack of plates -- plates are added and removed from the the top of the stack
(LIFO: last in, first out).

push(string) - Add a string to the top of the stack
pop() - Remove and return the string on the top of the stack
size() - Return the number of items on the stack
*/
// Functional-shared
var Stack = function() {
  // create statck object
  var someInstance = {};
  _(someInstance).extend(stackMethods);

  // var storage = {};
  // var length = 0;
  // * Instead of declaring var => connect object with propery
  someInstance.storage = {};
  someInstance.length = 0;

  return someInstance;

};

var stackMethods = {};

// Implement the methods below
stackMethods.push = function(value) {
  this.storage[this.length++] = value
};

stackMethods.pop = function() {
  if (this.length > 0) {
    let popedItem = this.storage[this.length];
    delete this.storage[this.length];
    this.length--;
    return this.storage[this.length];
  }
};

stackMethods.size = function() {
  return this.length;
};
