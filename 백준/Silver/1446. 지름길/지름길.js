const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [[n, d], ...inputs] = fs
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((it) => it.split(" ").map(Number));
const dp = Array(d + 1)
  .fill(0)
  .map((_, idx) => idx);

const shortcuts = new Map();

for (const [s, e, c] of inputs) {
  if (!shortcuts.has(s)) shortcuts.set(s, [[e, c]]);
  else shortcuts.set(s, [...shortcuts.get(s), [e, c]]);
}

for (let i = 0; i <= d; i++) {
  if (i) dp[i] = Math.min(dp[i - 1] + 1, dp[i]);

  if (shortcuts.has(i)) {
    for (const [e, c] of shortcuts.get(i)) {
      if (e <= d) dp[e] = Math.min(dp[e], dp[i] + c);
    }
  }
}

console.log(dp.at(-1));
