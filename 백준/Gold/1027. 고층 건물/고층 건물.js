const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const N = +input[0];
const buildings = input[1].split(" ").map(Number);

function solution(n) {
  if (n === 1) {
    return 0;
  }
  let answer = 0;
  for (let i = 0; i < n; i++) {
    let local = 0;
    for (let j = 0; j < i; j++) {
      if (between(j, i)) local += 1;
    }
    for (let k = i + 1; k < n; k++) {
      if (between(i, k)) local += 1;
    }
    answer = Math.max(answer, local);
  }

  return answer;
}

function between(start, end) {
  for (let i = start + 1; i < end; i++) {
    if (!check(start, buildings[start], end, buildings[end], i, buildings[i]))
      return false;
  }
  return true;
}

function check(x1, y1, x2, y2, x, y) {
  if ((y2 - y1) * x - (x2 - x1) * y + x2 * y1 - x1 * y2 > 0) return true;
  return false;
}

console.log(solution(N));
