

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);  //obj {get: ƒ, set: ƒ, each: ƒ}
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // {[ [key1, val1], [key2, val2] ]}


  //first use get to see if the index has a value already
  //if there is no a value
  var bucket = this._storage.get(index);
  var uniqueKey = true;
  if (!bucket) {
    //set the value of that index to an array = [ [k , v  ] ]
    this._storage.set(index, [[k, v]]);
    // if index alrady has a bucket
  } else {
    //go thrugh the buckets tuples and check the 0 index
    for (var i = 0; i < bucket.length; i++) {
      // if o index matches k.
      var tuple = bucket[i];
      if (tuple[0] === k) {
        //replace 1 index with v,
        tuple[1] = v;
        uniqueKey = false;
      }
    }
    if (uniqueKey) {
      bucket.push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket =  this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //set the bucket
  var bucket = this._storage.get(index);
  //check if it exists
  if (bucket) {
    //if true, iterate over
    for (var i = 0; i < bucket.length; i++) {
      // find tuple [0] with k, set tuple [1] to undefined;
      var tuple = bucket[i];
      if (tuple[0] === k) {
        tuple[1] = undefined;
      }
    }
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 insert,retrieve, remove - O(N)
 */


