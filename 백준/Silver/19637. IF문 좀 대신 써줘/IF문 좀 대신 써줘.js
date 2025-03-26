const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
let lastPower = -1;
let level = [];

for (let j = 1; j < 1 + N; j++) {
  const line = input[j];
  const [n, p] = line.split(" ");
  if (lastPower < +p) {
    level.push([n, +p]);
    lastPower = +p;
  }
}
const answer = [];
for (let j = N + 1; j < N + M + 1; j++) {
  const cur = +input[j];
  let left = 0;
  let right = level.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (cur <= level[mid][1]) right = mid;
    else left = mid + 1;
  }
  answer.push(level[left][0]);
}

console.log(answer.join("\n"));
