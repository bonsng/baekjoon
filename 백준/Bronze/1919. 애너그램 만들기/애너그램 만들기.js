const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "./autoever/input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const charArr = new Array(26).fill(0);

for (const c of input[0]) {
  charArr[c.charCodeAt() - 97]++;
}

for (const c of input[1]) {
  charArr[c.charCodeAt() - 97]--;
}

console.log(
  charArr.reduce((acc, cur) => {
    return acc + Math.abs(cur);
  }, 0)
);
