const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");
input.pop();

const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const countDiff = (string) => {
  const c = [0, 0];
  for (const s of string) {
    if (s === "X") {
      c[0] += 1;
    } else if (s === "O") {
      c[1] += 1;
    }
  }
  return c;
};

const countWin = (string) => {
  const winCount = [0, 0];
  for (const w of winning) {
    const [one, two, three] = [...w];
    if (
      string[one] === string[two] &&
      string[one] === string[three] &&
      string[two] === string[three]
    ) {
      if (string[one] === "X") {
        winCount[0]++;
      } else if (string[one] === "O") {
        winCount[1]++;
      }
    }
  }
  if (winCount[0] > 0 && winCount[1] === 0) {
    return "X";
  } else if (winCount[0] === 0 && winCount[1] > 0) {
    return "O";
  } else if (winCount[0] > 0 && winCount[1] > 0) {
    return "I";
  } else {
    return "D";
  }
};

const solution = (string) => {
  const diff = countDiff(string);
  switch (countWin(string)) {
    case "X":
      if (diff[0] - diff[1] === 1) return true;
      break;
    case "O":
      if (diff[0] - diff[1] === 0) return true;
      break;
    case "I":
      return false;
    default:
      if (diff[0] - diff[1] === 1 && diff[0] + diff[1] === 9) return true;
      return false;
  }
  return false;
};

for (const i of input) {
  console.log(solution(i) ? "valid" : "invalid");
}
