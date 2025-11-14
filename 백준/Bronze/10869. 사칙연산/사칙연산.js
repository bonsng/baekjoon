const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "./autoever/input.txt";
const [A,B] = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

console.log(A+B);
console.log(A-B);
console.log(A*B);
console.log(Math.floor(A/B));
console.log(A%B);
