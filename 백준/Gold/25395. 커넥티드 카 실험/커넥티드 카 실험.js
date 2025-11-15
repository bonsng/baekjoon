const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line);
});

rl.on("close", () => {
  const [n, s] = inputLines[0].split(" ").map(Number);
  const x = [0, ...inputLines[1].split(" ").map(Number)];
  const h = [0, ...inputLines[2].split(" ").map(Number)];

  let low = s,
    high = s;
  let l = x[low] - h[s],
    r = x[high] + h[s];
  let min_ = 1e9,
    max_ = 0;

  while (true) {
    for (let i = low - 1; i >= 1; i--) {
      if (x[i] >= l) {
        min_ = Math.min(min_, x[i] - h[i]);
        max_ = Math.max(max_, x[i] + h[i]);
        low = i;
      } else {
        break;
      }
    }

    for (let i = high + 1; i <= n; i++) {
      if (x[i] <= r) {
        min_ = Math.min(min_, x[i] - h[i]);
        max_ = Math.max(max_, x[i] + h[i]);
        high = i;
      } else {
        break;
      }
    }

    if (l === min_ && r === max_) break;

    l = min_;
    r = max_;
  }

  let result = [];
  for (let i = low; i <= high; i++) {
    result.push(i);
  }
  console.log(result.join(" "));
});
