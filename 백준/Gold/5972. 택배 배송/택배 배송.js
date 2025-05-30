class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(node, dist) {
    this.heap.push({ node, dist });
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIdx = (index - 1) >> 1;
      if (this.heap[parentIdx].dist <= this.heap[index].dist) break;
      [this.heap[parentIdx], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIdx],
      ];
      index = parentIdx;
    }
  }

  dequeue() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }
    return min;
  }

  heapifyDown(index) {
    while (index < this.heap.length) {
      const left = (index << 1) + 1;
      const right = (index << 1) + 2;
      let smallest = index;
      if (this.heap[left] && this.heap[left].dist < this.heap[smallest].dist) {
        smallest = left;
      }
      if (
        this.heap[right] &&
        this.heap[right].dist < this.heap[smallest].dist
      ) {
        smallest = right;
      }
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

const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const MAX = Infinity;
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const map = Array.from({ length: N + 1 }, () => []);
const distance = new Array(N + 1).fill(MAX);

for (const line of input) {
  const [A, B, cost] = line.split(" ").map(Number);
  map[A].push([B, cost]);
  map[B].push([A, cost]);
}

function dijkstra(start) {
  const pq = new PriorityQueue();
  pq.enqueue(start, 0);
  distance[start] = 0;
  while (!pq.isEmpty()) {
    let { node, dist } = pq.dequeue();
    if (distance[node] < dist) continue;
    for (let [adj, cost] of map[node]) {
      let totalCost = distance[node] + cost;
      if (distance[adj] > totalCost) {
        distance[adj] = totalCost;
        pq.enqueue(adj, totalCost);
      }
    }
  }
}

dijkstra(1);

console.log(distance[N]);
