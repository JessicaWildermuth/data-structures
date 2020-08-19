var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  var storage = {};
  return _.extend(stack, stackMethods);
};

stackMethods = {};


stackMethods.size = function() {
  return size;
};

stackMethods.pop = function() {
  var result;
  if (size > 0) {
    var result = storage[size - 1];
    delete storage[size - 1];
    size--;
  }
  return result;
};

stackMethods.push = function() {
  storage[size] = value;
  size++;
};