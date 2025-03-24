const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const [N, S, ...words] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

let answer = 0;

if (N > 1) {
  for (const word of words) {
    if (Math.abs(new Set(S).size - new Set(word).size) < 2) {
      switch (S.length - word.length) {
        case 0:
          if (minus(word) < 2) answer++;
          break;
        case 1:
          if (minus(word) == 1) answer++;
          break;
        case -1:
          if (minus(word) == 0) answer++;
          break;
        default:
          break;
      }
    }
  }
}

function minus(word) {
  let tempS = S;
  for (const w of word) {
    tempS = tempS.replace(w, "");
  }
  return tempS.length;
}

function rMinus(word) {
  let tempW = word;
  for (const w of S) {
    tempW = tempW.replace(w, "");
  }
  return tempW.length;
}

console.log(answer);
