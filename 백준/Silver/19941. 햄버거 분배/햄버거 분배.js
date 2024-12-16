const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
let count = 0;
let sen = input[1].split("");

sen.forEach((s, idx) => {
  if (s === "P") {
    const startIdx = Math.max(idx - K, 0);
    const endIdx = Math.min(N - 1, idx + K);
    for (let j = startIdx; j <= endIdx; j++) {
      if (sen[j] === "H") {
        count++;
        sen[j] = "E";
        break;
      }
    }
  }
});

console.log(count);
