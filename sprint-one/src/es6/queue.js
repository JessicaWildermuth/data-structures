class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.sizeCount = 0;
  }

  enqueue(value) {
    this.storage[this.sizeCount] = value;
    this.sizeCount++;
  }

  dequeue(value) {
    var firstToLast = Object.keys(this.storage).sort();
    var first = firstToLast.shift();
    var result = this.storage[first];
    delete this.storage[first];
    return result;
  }

  size() {
    var howMany = Object.keys(this.storage).length;
    return howMany;
  }

}


