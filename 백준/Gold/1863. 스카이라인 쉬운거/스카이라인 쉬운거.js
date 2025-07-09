const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...str] = fs.readFileSync(filepath).toString().trim().split("\n");

const input = str.map((v) => +v.split(" ")[1]);

let stack = [];
let count = 0;

input.forEach((v) => {
  while (stack.length !== 0 && v < stack[stack.length - 1]) {
    stack.pop();
    count++;
  }

  if (v > 0 && (stack.length === 0 || v > stack[stack.length - 1])) {
    stack.push(v);
  }
});

console.log(stack.length + count);
