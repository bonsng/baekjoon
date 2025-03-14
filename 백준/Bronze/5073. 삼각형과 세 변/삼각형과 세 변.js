const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

input.pop();

input.forEach((e) => console.log(solution(e)));

function solution(e) {
  const [x, y, z] = e.split(" ").map(Number);
  const max = Math.max(x, y, z);
  if (x + y + z - 2 * max <= 0) return "Invalid";

  switch (new Set([x, y, z]).size) {
    case 3:
      return "Scalene";
    case 2:
      return "Isosceles";
    case 1:
      return "Equilateral";
  }
}
