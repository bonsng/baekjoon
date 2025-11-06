const solution = (input) => {
  input = input.split("\n");
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input.slice(1, n + 1);
  const k = Number(input[1 + n]);
  const map = new Map();
  arr.forEach((v) => {
    if (map.has(v)) map.set(v, map.get(v) + 1);
    else {
      const count = v.split("").filter((s) => s === "0").length;
      if (count <= k && count % 2 === k % 2) map.set(v, 1);
    }
  });
  return map.size > 0 ? Math.max(...map.values()) : 0;
};

const path = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(path).toString().trim();

console.log(solution(input));