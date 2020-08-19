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

/* Stack
A stack works like a stack of plates -- plates are added and removed from the the top of the stack
(LIFO: last in, first out).

push(string) - Add a string to the top of the stack
pop() - Remove and return the string on the top of the stack
size() - Return the number of items on the stack
*/

// var Stack = function() {
class Stack {

  constructor() {
    this.storage = {};
    this.length = 0;
  }

  push(value) {
    this.storage[this.length++] = value
  };

  pop() {
    if ( this.length > 0) {
      let popedItem =  this.storage[ this.length];
      delete  this.storage[ this.length];
      this.length--;
      return  this.storage[ this.length];
    }
  };

  size() {
    return  this.length;
  };
}
