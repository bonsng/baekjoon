const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let N = input.shift();
input = input.shift().split(" ").map(Number);
let abs = Infinity;
let right = 0;
let left = 0;
let start = 0;
let end = N - 1;

while (start < end) {
  let sum = input[start] + input[end];
  if (Math.abs(sum) < abs) {
    abs = Math.abs(sum);
    left = input[start];
    right = input[end];
  }

  if (sum === 0) {
    break;
  } else if (sum < 0) {
    ++start;
  } else {
    --end;
  }
}

console.log(left, right);
