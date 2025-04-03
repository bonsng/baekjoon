const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, input] = fs.readFileSync(filepath).toString().trim().split("\n");
const balls = input.split("");

let result = Number.MAX_SAFE_INTEGER;

let count = 0;
for (let i = 0; i < balls.length; i++) {
  if (balls[i] !== "R") {
    while (i < balls.length) {
      if (balls[i] === "R") count += 1;
      i += 1;
    }
  }
}
result = count;

count = 0;
for (let i = balls.length - 1; i >= 0; i--) {
  if (balls[i] !== "R") {
    while (i >= 0) {
      if (balls[i] === "R") count += 1;
      i -= 1;
    }
  }
}
result = Math.min(count, result);

count = 0;
for (let i = 0; i < balls.length; i++) {
  if (balls[i] !== "B") {
    while (i < balls.length) {
      if (balls[i] === "B") count += 1;
      i += 1;
    }
  }
}
result = Math.min(count, result);

count = 0;
for (let i = balls.length - 1; i >= 0; i--) {
  if (balls[i] !== "B") {
    while (i >= 0) {
      if (balls[i] === "B") count += 1;
      i -= 1;
    }
  }
}
result = Math.min(count, result);

console.log(result);
