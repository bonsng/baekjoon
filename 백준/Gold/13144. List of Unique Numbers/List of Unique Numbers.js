const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const N = +input.shift();
const nums = input[0].split(" ").map(Number);
let answer = 0;
let left = 0;
let uniqueNum = new Set();

for (let right = 0; right < N; right++) {
  while (uniqueNum.has(nums[right])) {
    uniqueNum.delete(nums[left++]);
  }
  uniqueNum.add(nums[right]);
  answer += right - left + 1;
}

console.log(answer);
