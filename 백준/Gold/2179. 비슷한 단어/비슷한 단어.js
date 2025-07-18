const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const [N, ...input] = fs.readFileSync(filepath).toString().trim().split("\n");
function compareWord(word1, word2) {
  let prefix = 0;
  let wordLength = word1.length > word2.length ? word2.length : word1.length;

  for (let i = 0; i < wordLength; i++) {
    if (word1.charCodeAt(i) !== word2.charCodeAt(i)) return prefix;
    prefix++;
  }
  return prefix;
}
let answer = -1;
let answerWords = [];
for (let i = 0; i < +N; i++) {
  for (let j = i + 1; j < +N; j++) {
    const prefixLength = compareWord(input[i], input[j]);
    if (prefixLength > answer) {
      answer = prefixLength;
      answerWords = [input[i], input[j]];
    }
  }
}

answerWords.forEach((e) => console.log(e));
