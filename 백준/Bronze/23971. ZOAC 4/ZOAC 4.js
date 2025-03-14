const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [H, W, N, M] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const width = Math.ceil(W / (M + 1));
const height = Math.ceil(H / (N + 1));

console.log(width * height);
