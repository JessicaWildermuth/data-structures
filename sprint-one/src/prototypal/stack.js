/* Prototypal: using Object.create

Do:
Use Object.create  with the object from step 2 to create instances of your class
Don't:
Use the keyword new
*/

/* Stack
A stack works like a stack of plates -- plates are added and removed from the the top of the stack
(LIFO: last in, first out).

push(string) - Add a string to the top of the stack
pop() - Remove and return the string on the top of the stack
size() - Return the number of items on the stack
*/

// Prototypal: using Object.create
var Stack = function() {
  var someInstance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.length = 0;

  // * return object
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

