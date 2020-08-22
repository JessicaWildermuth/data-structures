// Function - share
var BinarySearchTree = function(value) {
  var bts = {};
  bts.left;
  bts.right;
  bts.value = value;
  _.extend(bts, btsMethods);
  return bts;
};


//methods objects that holds all our BST methods
var btsMethods = {};

//insert method
btsMethods.insert = function(value) {
  //make tree obj
  //let newBTS = BinarySearchTree(value);

  // if value is greater than root value
  if (value > this.value) {
    // if not occupied,
    if (!this.right) {
      // assign newBTS to root.right
      let newBTS = BinarySearchTree(value);
      this.right = newBTS;
    } else {
      // check right is already occupied,
       // use recursive.
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (!this.left) {
      let newBTS = BinarySearchTree(value);
      this.left = newBTS;
    } else {
      this.left.insert(value);
    }
  }
};
  //contains method
btsMethods.contains = function(target) {
  // check if root value is equal to the target
  if (this.value === target) {
    return true;
  }
    //if no
    //chech if it is greater or less than
    //if greater, repeat with right property of root
  if (target < this.value && this.left) {
    return this.left.contains(target);
    // after recursive, come back here and return
  } else if (target > this.value && this.right) {
    return this.right.contains(target);
  }

  return false;
  // takeaway :  make sure return your recursive function call
  // check every element, and then if there is no matching, return
  // false at the end
};
  //depthFirstLog method
btsMethods.depthFirstLog = function(cb) {
  // if this.value exists
  if (this.value) {
    //call the cb function on this.value
    cb(this.value)
  }
    // check the left exist
  if (this.left) {
    // this.left call depthFirstLog
    this.left.depthFirstLog(cb)
  }
  if (this.right) {
    // check the right exist
    // this.right call depthFirstLog
    this.right.depthFirstLog(cb)
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert - best : O(log n) / worst: O(n)   //if well balanced O(log n)
 contains - best : O(log n) / worst: O(n)
 depthFirstLog - O(n)
 */
