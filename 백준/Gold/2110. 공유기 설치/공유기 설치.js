const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const [N, C] = input.shift().split(" ").map(Number);
const data = input.map(Number);
data.sort((a, b) => a - b);

let start = 1;
let end = data[data.length - 1];

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  let count = 1;
  let prev = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i] - prev < mid) continue;
    prev = data[i];
    count++;
  }

  if (count < C) end = mid - 1;
  else start = mid + 1;
}

console.log(end);
