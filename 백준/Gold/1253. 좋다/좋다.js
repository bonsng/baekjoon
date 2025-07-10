const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const N = +input.shift();
const nums = input[0].split(" ").map(Number);
const set = new Set();
const numState = {};

for (const n of nums) {
  if (numState[n]) {
    numState[n] += 1;
  } else {
    numState[n] = 1;
  }
}

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (nums[i] === 0 && nums[j] === 0) {
      if (numState[0] >= 3) set.add(0);
    } else if (nums[i] === 0) {
      if (numState[nums[j]] >= 2) set.add(nums[j]);
    } else if (nums[j] === 0) {
      if (numState[nums[i]] >= 2) set.add(nums[i]);
    } else {
      set.add(nums[i] + nums[j]);
    }
  }
}

let answer = 0;
for (const n of nums) {
  if (set.has(n)) {
    answer += 1;
  }
}

console.log(answer);
