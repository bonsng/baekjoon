const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [N, M, ...list] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const path = list
  .pop()
  .split(" ")
  .map((e) => +e - 1);

const cities = list.map((e) => e.split(" ").map(Number));
const parentArr = new Array(N).fill(0);

for (let i = 1; i < N; i++) parentArr[i] = i;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (cities[i][j] === 1) Union(i, j);
  }
}

for (let i = 0; i < M - 1; i++) {
  if (getParent(path[i]) !== getParent(path[i + 1])) {
    console.log("NO");
    return;
  }
}
console.log("YES");

function getParent(num) {
  if (parentArr[num] === num) return num;

  parentArr[num] = getParent(parentArr[num]);
  return parentArr[num];
}

function Union(a, b) {
  aParent = getParent(a);
  bParent = getParent(b);

  if (aParent < bParent) parentArr[bParent] = aParent;
  else parentArr[aParent] = bParent;
}
