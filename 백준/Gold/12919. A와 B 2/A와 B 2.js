const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [S, T] = fs.readFileSync(filepath).toString().trim().split("\n");

let answer = 0;
dfs(T);
console.log(answer);

function dfs(t) {
  if (S.length === t.length) {
    if (S === t) {
      answer = 1;
    }
    return;
  }

  if (t[t.length - 1] === "A") dfs(t.slice(0, t.length - 1));
  if (t[0] === "B") dfs([...t.slice(1)].reverse().join(""));
}

// AA -> A
// AB -> X
// BA -> B / A
// BB -> B
