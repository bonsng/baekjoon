const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, people] = fs
  .readFileSync(filepath)
  .toString()
  .split("\n")
  .map((e, idx) => {
    if (idx === 0) {
      return +e;
    } else {
      return e.split(" ").map(Number);
    }
  });

people.reverse();
let answer = [N];
for (let i = 1; i < N; i++) {
  let num = people[i];
  let tempAnswer = [...answer];
  answer = [...tempAnswer.slice(0, num), N - i, ...tempAnswer.slice(num)];
}

console.log(answer.join(" "));
