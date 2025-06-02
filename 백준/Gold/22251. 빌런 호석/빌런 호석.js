const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K, P, X] = fs.readFileSync(filepath).toString().trim().split(" ");

const numberDict = {
  0: [1, 1, 1, 0, 1, 1, 1],
  1: [0, 0, 1, 0, 0, 1, 0],
  2: [1, 0, 1, 1, 1, 0, 1],
  3: [1, 0, 1, 1, 0, 1, 1],
  4: [0, 1, 1, 1, 0, 1, 0],
  5: [1, 1, 0, 1, 0, 1, 1],
  6: [1, 1, 0, 1, 1, 1, 1],
  7: [1, 0, 1, 0, 0, 1, 0],
  8: [1, 1, 1, 1, 1, 1, 1],
  9: [1, 1, 1, 1, 0, 1, 1],
};

// N : 1~N
// K : 자리수
// P : 바꾸는 개수
// X : 현재 층
const arrX = Array.from({ length: K }).fill(numberDict[0]);
for (let i = K - X.length; i < K; i++) {
  arrX[i] = numberDict[X[i - K + X.length]];
}

const makeNumArr = (num) => {
  const numArr = Array.from({ length: K }).fill(numberDict[0]);
  let stringNum = num.toString();
  for (let i = K - stringNum.length; i < K; i++) {
    numArr[i] = numberDict[stringNum[i - K + stringNum.length]];
  }
  return numArr;
};

const compare = (arr) => {
  let count = 0;
  for (let i = 0; i < K; i++) {
    for (let j = 0; j < 7; j++) {
      if (arr[i][j] !== arrX[i][j]) count++;
    }
  }

  if (count <= P) return true;
  return false;
};
let answer = 0;
for (let i = 1; i <= +N; i++) {
  if (i === +X) continue;
  const compareArr = makeNumArr(i);
  if (compare(compareArr)) answer++;
}

console.log(answer);
