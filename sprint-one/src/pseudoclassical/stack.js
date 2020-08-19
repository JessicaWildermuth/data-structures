/* Pseudoclassical instantiation: create instances with the keyword new

Do:
Capitalize your function name to indicate to others that it is intended to be run with the keyword new
Use the keyword new when instantiating your class
Use the keyword this in your constructor
Don't:
Declare the instance explicitly
Return the instance explicitly
*/

/* Stack
A stack works like a stack of plates -- plates are added and removed from the the top of the stack
(LIFO: last in, first out).

push(string) - Add a string to the top of the stack
pop() - Remove and return the string on the top of the stack
size() - Return the number of items on the stack
*/

var Stack = function() {

  // Use an object with numeric keys to store values
  this.storage = {};
  this.length = 0;

};

// Implement the methods below
Stack.prototype.push = function(value) {
  this.storage[this.length++] = value
};

Stack.prototype.pop = function() {
  if ( this.length > 0) {
    let popedItem =  this.storage[ this.length];
    delete  this.storage[ this.length];
    this.length--;
    return  this.storage[ this.length];
  }
};

Stack.prototype.size = function() {
  return  this.length;
};

