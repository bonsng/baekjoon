const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs.readFileSync(filepath).toString().split("\n");

const N = +input.shift();
const M = +input.shift();
const positions = [0, ...input[0].split(" ").map(Number), N];
const between = [];

for (let i = 0; i < M + 1; i++) {
  let b = positions[i + 1] - positions[i];
  if (i !== 0 && i !== M) b = Math.ceil(b / 2);
  between.push(b);
}

console.log(Math.max(...between));
