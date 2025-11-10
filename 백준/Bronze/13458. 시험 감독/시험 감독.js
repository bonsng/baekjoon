const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const rooms = input[1].split(" ").map(Number);
const [B, C] = input[2].split(" ").map(Number);
let answer = 0;
for (const room of rooms) {
  answer += room < B ? 1 : 1 + Math.ceil((room - B) / C);
}

console.log(answer);
