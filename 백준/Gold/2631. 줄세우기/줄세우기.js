const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = +input.shift();
const dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (input[j] < input[i]) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}

console.log(N - Math.max(...dp));
