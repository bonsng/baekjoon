const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const days = input[1].split(" ").map(Number);

let maxVisit = 0;
let sum = 0;
let sumArr = [];
for (let i = 0; i < X; i++) {
  maxVisit += days[i];
}
sum = maxVisit;
sumArr.push(sum);

for (let i = 1; i < days.length - X + 1; i++) {
  sum = sum - days[i - 1] + days[i + X - 1];
  maxVisit = Math.max(sum, maxVisit);
  sumArr.push(sum);
}

if (maxVisit === 0) {
  console.log("SAD");
} else {
  console.log(maxVisit);
  console.log(sumArr.filter((e) => e === maxVisit).length);
}
