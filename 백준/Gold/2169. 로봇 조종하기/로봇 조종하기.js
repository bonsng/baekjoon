const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const mars = input.slice(1).map((e) => {
  return e.split(" ").map(Number);
});
const cost = Array.from({ length: N }, () => Array.from({ length: M }).fill(0));
const M_INF = -Infinity;

cost[0][0] = mars[0][0];
for (let i = 1; i < M; i++) cost[0][i] = cost[0][i - 1] + mars[0][i];

for (let i = 1; i < N; i++) {
  let moveRight = Array(M).fill(M_INF);
  let moveLeft = Array(M).fill(M_INF);

  moveRight[0] = cost[i - 1][0] + mars[i][0];
  moveLeft[M - 1] = cost[i - 1][M - 1] + mars[i][M - 1];

  for (let j = 1; j < M; j++)
    moveRight[j] = Math.max(moveRight[j - 1], cost[i - 1][j]) + mars[i][j];
  for (let j = M - 2; j >= 0; j--)
    moveLeft[j] = Math.max(moveLeft[j + 1], cost[i - 1][j]) + mars[i][j];
  for (let j = 0; j < M; j++) cost[i][j] = Math.max(moveRight[j], moveLeft[j]);
}

console.log(cost[N - 1][M - 1]);
