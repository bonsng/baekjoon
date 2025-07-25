const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, initial, goal] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let str = initial;
let result = Infinity;
let count = 0;

function toggle(idx) {
  if (str[idx] === "0") str = str.slice(0, idx) + "1" + str.slice(idx + 1);
  else str = str.slice(0, idx) + "0" + str.slice(idx + 1);
}

function greedy() {
  for (let i = 1; i < N; i++) {
    if (str[i - 1] !== goal[i - 1]) {
      count += 1;
      toggle(i);
      toggle(i - 1);
      if (i !== N - 1) {
        toggle(i + 1);
      }
    }
  }
  if (str === goal) result = Math.min(result, count);
}

if (initial === goal) {
  console.log(0);
} else {
  count = 1;
  toggle(0);
  toggle(1);
  greedy();

  str = initial;
  count = 0;
  greedy();

  if (result === Infinity) console.log(-1);
  else console.log(result);
}
