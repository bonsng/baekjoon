const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const distances = input.shift().split(" ").map(BigInt);
const prices = input.shift().split(" ").map(BigInt);

prices.pop();

let currentPrice = prices[0];
let total = currentPrice * distances[0];

for (let i = 1; i < N - 1; i++) {
  if (currentPrice > prices[i]) currentPrice = prices[i];
  total += currentPrice * distances[i];
}

console.log(total.toString());
