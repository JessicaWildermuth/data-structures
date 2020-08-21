class Queue {
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


