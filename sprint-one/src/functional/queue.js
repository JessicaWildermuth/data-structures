var Queue = function() {
  var someInstance = {};
  //size varaible to keep track of the size of the queue for all property methods to access
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //the queue is add to the back
    //need to take the size of the queue and then add this value to the next indes (in this case the next avaialbe index would be the length as indexes are zero based);
    //when we add to the queue, the size increases, so we need to increment our size count by 1
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    var result = storage[0];
    delete storage[0];
    size--;
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
