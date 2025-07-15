const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().split("\n");
const [R, C] = input.shift().split(" ").map(Number);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];
let answer = 0;
let visited = new Array(26).fill(false);
function dfs(x, y, cnt) {
  answer = Math.max(answer, cnt);
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && nx < R && ny >= 0 && ny < C) {
      if (visited[input[nx][ny].charCodeAt() - 65] === false) {
        visited[input[nx][ny].charCodeAt() - 65] = true;
        dfs(nx, ny, cnt + 1);
        visited[input[nx][ny].charCodeAt() - 65] = false;
      }
    }
  }
}

visited[input[0][0].charCodeAt() - 65] = true;
dfs(0, 0, 1);

console.log(answer);
