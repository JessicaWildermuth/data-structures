var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeCount = 0;
};

Stack.prototype.pop = function(value) {
  var result;
  if (this.sizeCount > 0) {
    result = this.storage[this.sizeCount - 1];
    delete this.storage[this.sizeCount - 1];
    this.sizeCount--;
  }
  return result;
};

Stack.prototype.push = function(value) {
  this.storage[this.sizeCount] = value;
  this.sizeCount++;
};

Stack.prototype.size = function() {
  return this.sizeCount;
};