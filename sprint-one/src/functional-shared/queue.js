var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.sizeCount = 0;
  return _.extend(queue, queueMethods);
};

var queueMethods = {};

queueMethods.size = function() {
  var howMany = Object.keys(this.storage).length;
  return howMany;
};

queueMethods.enqueue = function(value) {
  this.storage[this.sizeCount] = value;
  this.sizeCount++;
};

queueMethods.dequeue = function(value) {
  var firstToLast = Object.keys(this.storage).sort();
  var first = firstToLast.shift();
  var result = this.storage[first];
  delete this.storage[first];
  return result;
};