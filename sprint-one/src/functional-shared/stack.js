var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  stack.sizeCount = 0;
  return _.extend(stack, stackMethods);
};

stackMethods = {};

stackMethods.size = function() {
  return this.sizeCount;
};

stackMethods.pop = function(value) {
  var result;
  if (this.sizeCount > 0) {
    var result = this.storage[this.sizeCount - 1];
    delete this.storage[this.sizeCount - 1];
    this.sizeCount--;
  }
  return result;
};

stackMethods.push = function(value) {
  this.storage[this.sizeCount] = value;
  this.sizeCount++;
};