const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...input] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const fibArr = [
  [1, 0],
  [0, 1],
];

for (let i = 2; i < 41; i++) {
  fibArr.push([
    fibArr[i - 2][0] + fibArr[i - 1][0],
    fibArr[i - 2][1] + fibArr[i - 1][1],
  ]);
}
let answer = [];
for (const n of input) {
  answer.push(fibArr[n].join(" "));
}

console.log(answer.join("\n"));
