const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const N = +input;

const [x, y] = [Math.floor(N / 3), N % 3];

const result = (x + y) % 2 === 0 ? "CY" : "SK";

console.log(result);
