const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "./backjoon/input.txt";
const [N, ...input] = fs.readFileSync(filepath).toString().split("\n");

for (let i = 0; i < N; i++) {
  const dict = {};

  const [W, K] = [input[2 * i], +input[2 * i + 1]];
  for (let j = 0; j < W.length; j++) {
    if (!dict[W[j]]) {
      dict[W[j]] = [j];
    } else {
      dict[W[j]].push(j);
    }
  }

  let min = 10001;
  let max = -1;

  for (const c of Object.keys(dict)) {
    if (dict[c].length >= K) {
      for (let m = 0; m < dict[c].length - K + 1; m++) {
        let num = dict[c][m + K - 1] - dict[c][m] + 1;
        min = Math.min(min, num);
        max = Math.max(max, num);
      }
    }
  }

  if (min === 10001 || max === -1) {
    console.log(-1);
  } else {
    console.log(min, max);
  }
}
