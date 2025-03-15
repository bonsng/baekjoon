const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const lineLen = input[0].length;
const move = {
  right: [0, 1],
  left: [0, -1],
  down: [1, 0],
};
let heart = findHeart(input);

let bodySize = {
  leftArm: measure(heart[0], heart[1] - 1, move.left),
  rightArm: measure(heart[0], heart[1] + 1, move.right),
  back: measure(heart[0] + 1, heart[1], move.down),
  leftLeg: 0,
  rightLeg: 0,
};

bodySize.leftLeg = measure(
  heart[0] + bodySize.back + 1,
  heart[1] - 1,
  move.down
);
bodySize.rightLeg = measure(
  heart[0] + bodySize.back + 1,
  heart[1] + 1,
  move.down
);

console.log(heart[0] + 1, heart[1] + 1);
console.log(
  bodySize.leftArm,
  bodySize.rightArm,
  bodySize.back,
  bodySize.leftLeg,
  bodySize.rightLeg
);

function findHeart(arr) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < lineLen; j++) {
      if (arr[i][j] === "*") return [i + 1, j];
    }
  }
}

function measure(x, y, move) {
  let count = 0;
  while (x >= 0 && y >= 0 && x < N && y < lineLen && input[x][y] === "*") {
    count++;
    x += move[0];
    y += move[1];
  }
  return count;
}
