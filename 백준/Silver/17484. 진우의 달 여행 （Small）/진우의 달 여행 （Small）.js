const fs = require("fs");
const filepath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((e) => +e);

const dir = [-1, 0, 1];

const path = [];

input.forEach((v) => {
  path.push(v.split(" ").map(Number));
});

let max = 601;

for (let i = 0; i < M; i++) {
  let sum = path[0][i];
  dfs(0, i, sum, 3);
}
console.log(max);

function dfs(cntX, cntY, sum, prev) {
  cntX += 1;
  if (cntX === N) {
    if (sum < max) {
      max = sum;
    }
    return;
  }

  for (let j = 0; j < 3; j++) {
    if (
      cntY + dir[j] >= 0 &&
      cntY + dir[j] < M &&
      prev !== j &&
      sum + path[cntX][cntY + dir[j]] <= max
    ) {
      cntY += dir[j];
      sum += path[cntX][cntY];
      dfs(cntX, cntY, sum, j);
      sum -= path[cntX][cntY];
      cntY -= dir[j];
    }
  }
}
