var Tree = function(value) {
  var newTree = {};

  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

// addChild: takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  // creating new tree and set it as child
  let child = Tree(value);
  if (child.value) {
  // add the child to tree children
    this.children.push(child);
  }

// Where is root node? already exists?
};

treeMethods.contains = function(target) {
  // if this.value is equal to target
  var targetFound = false;
  let checkChildren = function(tree) {
    // take an object and it checks the object.value is the same as the target.
    // if it has children,
    // check each children and calling contains()
    if (tree.value === target) {
      targetFound = true;
    } else if (tree.children.length !== 0) {
      for (let i = 0; i < tree.children.length; i++) {
        checkChildren(tree.children[i])
      }
    }

  };
  checkChildren(this);

  return targetFound;
  // ? how to do without using targetFound ?
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: O(1) ?
 contains: Jenny - O(n)  vs  Jessie - Quadratic time complexity
 */
