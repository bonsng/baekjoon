const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const num = fs.readFileSync(filepath).toString().trim();

let cur = 1;
let idx = 0;

while (idx < num.length) {
  const curStr = cur.toString();
  for (let i = 0; i < curStr.length; i++) {
    if (curStr[i] === num[idx]) idx++;
  }
  cur++;
}

console.log(cur - 1);
