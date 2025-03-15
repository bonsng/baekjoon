const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs.readFileSync(filepath).toString().split("\n");

const [N, T, P] = input[0].split(" ").map(Number);
if (N === 0) {
  console.log(1);
} else {
  let scores = input[1].split(" ").map(Number);
  let tIdx = getIdx(scores, T);
  let newScores = [...scores.slice(0, tIdx), T, ...scores.slice(tIdx)];
  console.log(getRank(newScores, tIdx, T, P));
}

function getIdx(scores, T) {
  for (let i = 0; i < N; i++) {
    if (scores[i] < T) return i;
  }
  return N;
}

function getRank(scores, tIdx, T, P) {
  if (tIdx >= P) return -1;
  if (tIdx === 0) return 1;
  let rank = scores.findIndex((e) => e === T);
  return rank + 1;
}
