var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeCount = 0;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
Queue.prototype.enqueue = function(value) {
  this.storage[this.sizeCount] = value;
  this.sizeCount++;
};
Queue.prototype.dequeue = function(value) {
  var firstToLast = Object.keys(this.storage).sort();
  var first = firstToLast.shift();
  var result = this.storage[first];
  delete this.storage[first];
  return result;
};
