const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [line, ...input] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

const [N, d, k, c] = line.split(" ").map(Number);

let dishes = Array(d + 1).fill(0);
let sushi = input.map(Number);

let count = 0;
let result = 0;

for (let i = 0; i < k; i++) {
  if (dishes[sushi[i]] === 0) {
    count++;
  }
  dishes[sushi[i]]++;
}
result = count;

for (let i = 0; i < N; i++) {
  let endIdx = (i + k) % N;

  if (count >= result) {
    if (dishes[c] == 0) {
      result = count + 1;
    } else {
      result = count;
    }
  }

  dishes[sushi[i]]--;
  if (dishes[sushi[i]] === 0) count--;
  if (dishes[sushi[endIdx]] === 0) count++;
  dishes[sushi[endIdx]]++;
}

console.log(result);
