const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const N = +input.shift();
const whList = input.map((el) => {
  return el.split(" ").map(Number);
});

let rank = new Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    switch (compareBig(i, j)) {
      case 1:
        rank[i] += 1;
        break;
      case -1:
        rank[j] += 1;
      default:
        break;
    }
  }
}

console.log(rank.join(" "));

function compareBig(i, j) {
  if (whList[i][0] > whList[j][0]) {
    if (whList[i][1] > whList[j][1]) {
      return -1;
    } else {
      return 0;
    }
  } else if (whList[i][0] < whList[j][0]) {
    if (whList[i][1] < whList[j][1]) {
      return 1;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}
