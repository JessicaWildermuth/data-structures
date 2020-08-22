

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


  // // approach 2 - not using helper fn
  //   //make bucket
  //   let bucket = [];
  //   //make a tuple with the k and v as the zero and first indexes
  //   let tuple = [k, v];
  //   let keyUnique = true;

  //   // case - if no bucket(if this._storage[index])
  //   if (!this._storage[index]) {
  //     // we create the bucket and tuple of key & value inside of bucket
  //     //set the index to the bucket
  //     this._storage[index] = bucket;
  //     // add our tuple to our bucket
  //     this._storage[index].push(tuple);
  //     //this._storage[index] = [[k, v]]; also works, but is not as clear

  //   } else {
  //   // case - bucket exist and checking tuple key
  //   // if there is a bucket in the index,
  //   // iterate through the bucket,
  //     for (let i = 0; i < this._storage[index].length; i++) {
  //       // each element in the bucket will check tuple[0]
  //       // if tuple[0] is the same as the key
  //       if (this._storage[index][i][0] === k) {
  //         // we set the tuple in a index 1.
  //         this._storage[index][i][1] = v;
  //         keyUnique = false;
  //         break;
  //       }
  //     }
  //     // bucket exist & but no key
  //     if (keyUnique === true) {
  //       this._storage[index].push(tuple);
  //     }
  //   }


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


  // approach 2
  // check if the bucket exists
  //if it does
  // if (this._storage[index]) {
  //   //iterate over bucket's tuples
  //   for (let i = 0; i < this._storage[index].length; i++) {
  //     //if tuples[0] is the same as k
  //     if (this._storage[index][i][0] === k) {
  //       //return the tuple[1];
  //       return this._storage[index][i][1];
  //     }
  //   }
  // }
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

  //approach 2
  // for (let i = 0; i < this._storage[index].length; i++) {
  //   //if tuples[0] is the same as k
  //   if (this._storage[index][i][0] === k) {
  //     //return the tuple[1];
  //     this._storage[index][i][1] = undefined;
  //   }
  // }
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert,retrieve, remove - O(N)
 */


