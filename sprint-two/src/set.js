// Sets contain unique values in no particular order.

var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'string') {
    //if item is not in set storage
    if (!this._storage.hasOwnProperty(item)) {
      //add the item to the array
      this._storage[item] = item;

      // ? this._storage[item]  => doesn't add item because there is no value set to it
    }
  }
};

setPrototype.contains = function(item) {
  //check if item exists in storage,
  if (!this._storage.hasOwnProperty(item)) {
    // return boolean result
    return false;
  } else {
    return true;
  }
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(1)
 */
