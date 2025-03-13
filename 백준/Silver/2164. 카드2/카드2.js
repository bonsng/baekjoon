const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const N = +fs.readFileSync(filepath).toString().trim();

/**
 * 1. 제일 위에 카드를 버린다.
 * 2. 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다.
 */

solution(N);

function solution(N) {
  if (N === 1) {
    console.log(1);
  } else {
    let div = getDivision(N);
    console.log(2 * N - 2 ** div);
  }
}

function getDivision(N) {
  let i = 1;
  while (2 ** i < N) {
    i++;
  }
  return i;
}
