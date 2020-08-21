var Queue = function() {
  var someInstance = {};
  //size varaible to keep track of the size of the queue for all property methods to access
  var size = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //the queue is add to the back
    //need to take the size of the queue and then add the value to the next indes (if the next avaialbe index would be the length as indexes are zero based);
    //when we add to the queue, the size increases, so we need to increment our size count by 1
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    //need to take the object from the 1st key value
    var keys = Object.keys(storage);
    keys = keys.sort();
    var firstElement = keys.shift();
    var result = storage[firstElement];
    delete storage[firstElement];
    return result;
  };

  someInstance.size = function() {
    var storageLength = Object.keys(storage).length;
    return storageLength;
  };

  return someInstance;
};
