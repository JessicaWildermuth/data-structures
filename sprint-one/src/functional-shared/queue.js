var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  var storage = {};
  var sie = 0;
  return _.extend(newQueue, Queue.queueMethods);
};

// Queue.queueMethods = {};

// queueMethods.enqueue = function(value) {
//   this.storage[size] = value;
//   this.value++;
// };

// queueMethods.dequeue = function(value) {
//   var keys = Object.keys(storage).sort();
//   var firstElement = key[0];
//   delete this.storage[firstElement];
//   return firstElement;
// };

// queueMethods.size = function() {
//   var keyLength = Object.keys(storage).length;
//   return keyLength;
// };


// var giraffeMaker = function(name, height) {
//   var newGiraffe = {};
//   newGiraffe.name = name;
//   newGiraffe.height = height;
//   newGiraffe.hunger = 10;
//   extend(newGiraffe, giraffeMaker.giraffeMethods);

//   return newGiraffe;
// };

// var extend = function(to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };

// giraffeMaker.giraffeMethods = {};


// giraffeMaker.giraffeMethods.isTallEnough = function(treeHeight) {
//     return this.height > treeHeight;
//   };

// giraffeMaker.giraffeMethods.isHungry = function() {
//   return this.hunger > 0;
// };