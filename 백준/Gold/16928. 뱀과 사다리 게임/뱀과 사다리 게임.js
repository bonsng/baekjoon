const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const ladder = input.slice(1, N + 1).map((e) => e.split(" ").map(Number));
const snake = input.slice(N + 1).map((e) => e.split(" ").map(Number));
const visited = Array(101).fill(false);
const arr = Array(101).fill(0);

for (let [x, y] of ladder) {
  arr[x] = y;
}

for (let [u, v] of snake) {
  arr[u] = v;
}

console.log(bfs(1, 0));

function bfs(start, count) {
  const q = [[start, count]];
  visited[start] = true;
  while (q.length > 0) {
    const [v, diceCount] = q.shift();
    for (let i = 1; i < 7; i++) {
      let next = v + i;
      if (next === 100) return diceCount + 1;
      else if (next < 100) {
        if (arr[next] !== 0) {
          next = arr[next];
        }
        if (!visited[next]) {
          q.push([next, diceCount + 1]);
          visited[next] = true;
        }
      }
    }
  }
}
