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
  let numA = dict[a];
  let numB = dict[b];
  if (numA !== numB) {
    return numB - numA;
  } else {
    if (a.length !== b.length) {
      return b.length - a.length;
    } else {
      return setOrder(a, b, a.length);
    }
  }
});

console.log(words.join("\n"));
