const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [T, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");
let answer = [];

for (let i = 0; i < T * 2; i += 2) {
  const N = +input[i];
  const stock = input[i + 1].split(" ").map(Number);
  let profit = 0;
  let max = 0;

  for (let i = N - 1; i > -1; i--) {
    if (stock[i] > max) max = stock[i];
    else if (stock[i] < max) profit += max - stock[i];
  }

  answer.push(profit);
}

console.log(answer.join("\n"));
