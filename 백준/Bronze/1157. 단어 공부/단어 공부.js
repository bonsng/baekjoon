const word = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .toUpperCase();
let dict = {};
for (const w of word) {
  if (dict[w]) {
    dict[w] += 1;
  } else {
    dict[w] = 1;
  }
}
const max = Math.max(...Object.values(dict));

let answer = [];
for (const k of Object.keys(dict)) {
  if (max === dict[k]) {
    answer.push(k);
  }
}

console.log(answer.length === 1 ? answer[0] : "?");
