const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "Wiki\\input.txt";
const inputs = fs.readFileSync(path).toString().trim().split("\n");

const n = Number(inputs[0]);
const A = inputs[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function isGood(target) {
  let left = 0;
  let right = A.length - 1;

  while (left < right) {
    const sum = A[left] + A[right];

    if (left === target) {
      left += 1;
      continue;
    } else if (right === target) {
      right -= 1;
      continue;
    }

    if (sum === A[target]) return true;
    else if (sum < A[target]) left += 1;
    else right -= 1;
  }

  return false;
}

let ans = 0;
for (let i = 0; i < A.length; i++) {
  if (isGood(i)) ans += 1;
}

console.log(ans);
