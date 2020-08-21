class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.sizeCount = 0;
  }

  pop(value) {
    var result;
    if (this.sizeCount > 0) {
      var result = this.storage[this.sizeCount - 1];
      delete this.storage[this.sizeCount - 1];
      this.sizeCount--;
      return result;
    }
  }

  push(value) {
    this.storage[this.sizeCount] = value;
    this.sizeCount++;
  }

  size() {
    return this.sizeCount;
  }

}
