const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let answer = [];
input.unshift(null);
const visited = Array.from({ length: N + 1 }, () => false);
const initVisited = () => {
  for (let i = 0; i < N + 1; i++) {
    visited[i] = false;
  }
};

const dfs = (v, start, cycle) => {
  if (cycle.length > 0 && v === start) {
    return cycle;
  }
  if (visited[v]) return;
  visited[v] = true;
  const newCycle = [...cycle, v];
  return dfs(input[v], start, newCycle);
};

for (let i = 1; i <= N; i++) {
  initVisited();
  if (i === input[i]) {
    answer = [...answer, i];
  } else {
    const cycle = dfs(i, i, []);
    if (cycle) {
      answer = [...answer, ...cycle];
    }
  }
}

answer = [...new Set(answer)];
answer.sort((a, b) => a - b);
console.log(answer.length);
console.log(answer.join("\n"));
