const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const set = new Set();
const [N, M] = input[0].split(" ").map(Number);
for (let i = 1; i < N + 1; i++) {
  set.add(input[i]);
}

let history = new Set();
let size = N;
let answer = [];

for (let i = N + 1; i < N + M + 1; i++) {
  const line = input[i].split(",");
  line.forEach((e) => {
    if (!history.has(e)) {
      if (set.has(e)) size--;
      history.add(e);
    }
  });
  answer.push(size);
}

console.log(answer.join("\n"));
