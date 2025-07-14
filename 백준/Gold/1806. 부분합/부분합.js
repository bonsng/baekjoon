const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const [N, S] = input.shift().split(" ").map(Number);
const nums = input[0].split(" ").map(Number);

function solution(start, end) {
  let sum = 0;
  while (true) {
    if (nums[end] >= S) return 1;
    sum += nums[end++];
    if (sum >= S || end === nums.length) break;
  }

  let answer = 0;
  if (sum < S && end === nums.length) {
    return 0;
  } else {
    answer = end - start;
    end -= 1;
    while (end < nums.length) {
      if (sum > S) {
        sum -= nums[start++];
      } else {
        end++;
        sum += nums[end] ? nums[end] : 0;
      }
      if (sum >= S) answer = Math.min(answer, end - start + 1);
    }
    return answer;
  }
}

console.log(solution(0, 0));
