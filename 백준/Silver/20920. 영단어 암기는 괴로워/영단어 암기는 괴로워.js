const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const [NnM, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");

const [N, M] = NnM.split(" ").map(Number);
const words = [];
const dict = {};
input.forEach((word) => {
  if (word.length >= M) {
    if (dict[word]) {
      dict[word]++;
    } else {
      dict[word] = 1;
      words.push(word);
    }
  }
});

const setOrder = (a, b, n) => {
  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) {
      return a[i].charCodeAt() - b[i].charCodeAt();
    }
  }
};

words.sort((a, b) => {
  if (dict[a] < dict[b]) return 1;
  else if (dict[a] === dict[b]) {
    if (a.length < b.length) return 1;
    else if (a.length === b.length) {
      return setOrder(a, b, a.length);
    } else return -1;
  } else return -1;
});

console.log(words.join("\n"));
