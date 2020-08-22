/*
A linkedList class, in functional style, with the following properties:
 .head property, a linkedListNode instance
 .tail property, a linkedListNode instance
 .addToTail() method, takes a value and adds it to the end of the list
 .removeHead() method, removes the first node from the list and returns its value
 .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
 What is the time complexity of the above functions?
 */
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create new node (has property of value, next)
    var newNode = Node(value);
    if (newNode.value) {
      if (!list.head) {
        list.head = newNode;
      } else {
        list.tail.next = newNode;
      }
      list.tail = newNode;
    }
   };

  list.removeHead = function() {
    // create variable currentHead to hold head node
    // delete the head node
    // set head.next to head
    // return headValue

    var currentHead = this.head;
    this.head = this.head.next;
    return currentHead.value;
    // don't need to delete currentHead?
  };

  list.contains = function(target) {
    //make variable for current node and initialize it to list.head
    var currentNode = list.head;
    //make a loop (while loop) that continues if currentNode exists
    while (currentNode) {
      //if the currentNode's value is equal to the target value
      if (currentNode.value === target) {
        //return true;
        return true;
        //not true
      } else {
        //set the currentNode variable to the currentNode.next property
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail - O(1)
removeHead - O(1)
contains - O(N)
 */
