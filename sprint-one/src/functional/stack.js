var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  //create a size count to begin with,
  //new instances shouldn't have any elements yet? can they though? ahhhh!
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    var result;
    if (size > 0) {
      var result = storage[size - 1];
      delete storage[size - 1];
      size--;
    }
    return result;
  };


  //need to keep size variable for all methods to access..... create global variable?
  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

//when called return {{}}
