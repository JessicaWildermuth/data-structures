

// Instantiate a new graph
var Graph = function() {
  // creating nodes & edge for graph
  this.edges = {};
  this.nodes = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};


// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.hasOwnProperty(node);

  // if (this.nodes[node]) {
  //   return true;
  // }
  // return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // when we delete node, delete edges(fromNode&toNode) as well.
  delete this.nodes[node];

  // delete fromNode
  delete this.edges[node];

  // delete toNode
  // try to find the value of this.edges[node] and delete it
  for (let key in this.edges) {
    if (this.edges[key] === node) {
      delete this.edges[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if fromNode of edges has the value of toNode
    // return true
  // otherwise, false
  return this.edges[fromNode] === toNode;

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // set fromNode to the key of edges obj
  // set value of the key to toNode
  // {fromNode: toNode}
  // {toNode: fromNode}
  this.edges[fromNode] = toNode;
  this.edges[toNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // or delete edge
  // delete the property of fromNode & toNode of edges obj
  delete this.edges[fromNode];
  delete this.edges[toNode];
};

// Pass in a callback which will be executed on each node of the graph.
//  traverses through the graph, calling a passed in function once on each node
Graph.prototype.forEachNode = function(cb) {
  // iterate over the key of this.nodes
    // run the callback fn and passing they key
  for (let key in this.nodes) {
    cb(this.nodes[key]);
    // cb(key); -- even though key and value are the same here,
    // but key is just string format of the value. value maintains pure value. Therefore it is working?
  }
//
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode: O(1)
contains: O(1)
removeNode: O(N)
hasEdge, addEdge,removeEdge : : O(1)
forEachNode: O(N)
 */


