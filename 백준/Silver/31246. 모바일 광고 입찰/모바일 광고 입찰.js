const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "./autoever/input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);

const fails = [];
for (let i = 1; i < input.length; i++) {
  const [A, B] = input[i].split(" ").map(Number);
  if (B - A > 0) fails.push(B - A);
}

function solution(fails) {
  const success = N - fails.length;
  if (success >= K) return 0;

  return fails[K - success - 1];
}

fails.sort((a, b) => a - b);
console.log(solution(fails));
