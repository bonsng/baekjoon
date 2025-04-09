const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = require("fs")
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const dp = Array.from({ length: 10001 }, () => 0);
dp[0] = 1;

for (let coin of [1, 2, 3]) {
  for (let i = coin; i <= 10000; i++) {
    dp[i] += dp[i - coin];
  }
}

const result = [];
input.forEach((e) => {
  result.push(dp[+e]);
});

console.log(result.join("\n"));
