const solve = (input, N, M) => {
  input.sort((a, b) => a - b);
  let high = input[N - 1];
  let low = 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const sum = input.reduce((acc, v) => acc + (v <= mid ? v : mid), 0);
    if (sum <= M) low = mid + 1;
    else high = mid - 1;
  }
  console.log(high);
};

const [N, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map((v) => +v);
const M = input.pop();
solve(input, N, M);
