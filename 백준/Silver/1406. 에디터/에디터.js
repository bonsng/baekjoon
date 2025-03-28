const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let str = input[0].split("");
let M = +input[1];
let commands = input.slice(2);

let leftStack = str;
let rightStack = [];

for (let i = 0; i < M; i++) {
  let [cmd, val] = commands[i].split(" ");

  switch (cmd) {
    case "L":
      if (leftStack.length) rightStack.push(leftStack.pop());
      break;
    case "D":
      if (rightStack.length) leftStack.push(rightStack.pop());
      break;
    case "B":
      if (leftStack.length) leftStack.pop();
      break;
    case "P":
      leftStack.push(val);
      break;
  }
}

console.log(leftStack.concat(rightStack.reverse()).join(""));
