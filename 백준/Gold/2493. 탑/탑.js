const fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
let N = input.shift();
input = input.shift().split(" ").map(Number);

let stack = [];
let answer = [];

for (let i = 0; i < input.length; i++) {
  if (stack.length !== 0) {
    while (stack.length) {
      if (input[stack[stack.length - 1]] <= input[i]) {
        stack.pop();
      } else {
        break;
      }
    }
  }
  stack.push(i);

  if (stack.length === 1) {
    answer.push(0);
  } else {
    answer.push(stack[stack.length - 2] + 1);
  }
}

console.log(answer.join(" "));
