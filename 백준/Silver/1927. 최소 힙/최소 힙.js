const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    if (this.isEmpty()) return 0;

    const root = this.heap[0];
    const lastNode = this.heap.pop();

    if (!this.isEmpty()) {
      this.heap[0] = lastNode;
      this.heapifyDown();
    }

    return root;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[index]) break;
      [this.heap[parentIdx], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIdx],
      ];
      index = parentIdx;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      let smallest = index;
      const leftChildIdx = 2 * index + 1;
      const rightChildIdx = 2 * index + 2;

      if (
        leftChildIdx < length &&
        this.heap[leftChildIdx] < this.heap[smallest]
      )
        smallest = leftChildIdx;
      if (
        rightChildIdx < length &&
        this.heap[rightChildIdx] < this.heap[smallest]
      )
        smallest = rightChildIdx;

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const minHeap = new MinHeap();
let answer = [];
input.forEach((num) => {
  if (num === 0) {
    answer.push(minHeap.pop());
  } else {
    minHeap.push(num);
  }
});

console.log(answer.join("\n"));
