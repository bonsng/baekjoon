const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

let dict = {};
let maxLength = 0;
let nums = [];

for (const num of numbers) {
  if (dict[num]) {
    dict[num]++;
  } else {
    dict[num] = 1;
  }
  nums.push(num);

  if (dict[num] > K) {
    while (true) {
      let temp = nums.shift();
      dict[temp]--;
      if (temp === num) break;
    }
  }

  maxLength = Math.max(maxLength, nums.length);
}

console.log(maxLength);
