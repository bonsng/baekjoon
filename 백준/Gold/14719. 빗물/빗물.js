const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().split("\n");

const [H, W] = input.shift().split(" ").map(Number);

const arr = new Array(W).fill(null).map(() => new Array(H).fill(0));

let walls = input[0].split(" ").map(Number);

let answer = 0;

for (let i = 1; i < W - 1; i++) {
  let left = 0;
  let right = 0;

  for (let j = 0; j < i; j++) left = Math.max(left, walls[j]);
  for (let j = i + 1; j < W; j++) right = Math.max(right, walls[j]);

  const temp = Math.min(left, right) - walls[i];

  if (temp > 0) answer += temp;
}

console.log(answer);
