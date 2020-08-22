

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);  //obj {get: ƒ, set: ƒ, each: ƒ}
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // {[ [key1, val1], [key2, val2] ]}

  //make bucket
  let bucket = [];
  //make a tuple with the k and v as the zero and first indexes
  let tuple = [k, v];
  let keyUnique = true;

  // case - if no bucket(if this._storage[index])
  if (!this._storage[index]) {
    // we create the bucket and tuple of key & value inside of bucket
    //set the index to the bucket
    this._storage[index] = bucket;
    // add our tuple to our bucket
    this._storage[index].push(tuple);
    //this._storage[index] = [[k, v]]; also works, but is not as clear

  } else {
  // case - bucket exist and checking tuple key
  // if there is a bucket in the index,
  // iterate through the bucket,
    for (let i = 0; i < this._storage[index].length; i++) {
      // each element in the bucket will check tuple[0]
      // if tuple[0] is the same as the key
      if (this._storage[index][i][0] === k) {
        // we set the tuple in a index 1.
        this._storage[index][i][1] = v;
        keyUnique = false;
        break;
      }
    }
    // bucket exist & but no key
    if (keyUnique === true) {
      this._storage[index].push(tuple);
    }
  }


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if the bucket exists
  //if it does
  if (this._storage[index]) {
    //iterate over bucket's tuples
    for (let i = 0; i < this._storage[index].length; i++) {
      //if tuples[0] is the same as k
      if (this._storage[index][i][0] === k) {
        //return the tuple[1];
        return this._storage[index][i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (let i = 0; i < this._storage[index].length; i++) {
    //if tuples[0] is the same as k
    if (this._storage[index][i][0] === k) {
      //return the tuple[1];
      this._storage[index][i][1] = undefined;
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert,retrieve, remove - O(N)
 */


