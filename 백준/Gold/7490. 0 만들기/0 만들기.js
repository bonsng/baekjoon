const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const operators = ["+", "-", ""];
let answer = [];

const makeSentence = (num, arr) => {
  let sen = "";
  for (let i = 1; i < num; i++) {
    sen += i.toString();
    sen += arr[i - 1];
  }
  sen += num.toString();
  return sen;
};

const makeFormat = (num, arr) => {
  let sen = "";
  for (let i = 1; i < num; i++) {
    sen += i.toString();
    sen += arr[i - 1] === "" ? " " : arr[i - 1];
  }
  sen += num.toString();
  return sen;
};

function dfs(num, arr) {
  if (arr.length === num - 1) {
    // validate + push
    const sen = makeSentence(num, arr);
    if (eval(sen) === 0) answer.push(makeFormat(num, arr));
    return;
  }
  for (let i = 0; i < 3; i++) {
    arr.push(operators[i]);
    dfs(num, arr);
    arr.pop();
  }
}
const final = [];
input.forEach((v) => {
  answer = [];
  dfs(v, []);
  answer.sort();
  final.push(answer);
});

final.forEach((v, i) => {
  console.log(v.join("\n"));
  if (i !== N - 1) console.log();
});
