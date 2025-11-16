const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "./autoever/input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const N = +input[0];
const [sX, sY, eX, eY] = input[1].split(" ").map(Number);

function calculate(points) {
  let distance = 0;
  for (let i = 1; i < points.length; i++) {
    distance +=
      Math.abs(points[i][0] - points[i - 1][0]) +
      Math.abs(points[i][1] - points[i - 1][1]);
  }

  distance += Math.abs(points[0][0] - sX) + Math.abs(points[0][1] - sY);

  distance +=
    Math.abs(eX - points[points.length - 1][0]) +
    Math.abs(eY - points[points.length - 1][1]);

  return distance;
}

let navigationNum = 1;
let index = 2;
let answer = Infinity;
let answerNum = 0;
while (index < input.length) {
  let num = +input[index];
  let distance = calculate(
    input.slice(index + 1, index + num + 1).map((e) => {
      return e.split(" ").map(Number);
    })
  );

  if (answer > distance) {
    answerNum = navigationNum;
    answer = distance;
  }

  navigationNum++;
  index += num + 1;
}

console.log(answerNum);
