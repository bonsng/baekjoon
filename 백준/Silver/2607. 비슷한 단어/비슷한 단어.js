const [N, ...wordList] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const target = wordList.shift();
let answer = 0;

for (let word of wordList) {
  if (
    Math.abs(target.length - word.length) > 1 ||
    Math.abs(new Set(target).size - new Set(word).size) > 1
  )
    continue;

  for (const char of target) word = word.replace(char, '');
  if (word.length < 2) answer++;
}

console.log(answer);