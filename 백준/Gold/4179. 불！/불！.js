const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const dx = [-1, 1, 0, 0];
const dy = [0, 0, 1, -1];
const [R, C] = input.shift().split(" ").map(Number);
let maze = [];
let jihoon = [];
let fire = [];

let visited = Array.from({ length: R }).map(() => {
  return Array.from({ length: C }).fill(false);
});

input.forEach((e, i) => {
  let line = [];
  e.split("").forEach((el, j) => {
    if (el === "F") {
      fire.push([i, j]);
    } else if (el === "J") {
      jihoon.push([i, j]);
      visited[i][j] = true;
    }
    line.push(el);
  });
  maze.push(line);
});

function bfs(jihoon, fire, maze, visited) {
  let answer = 0;

  while (jihoon.length > 0) {
    answer++;
    let newFire = [];
    fire.forEach((e) => {
      for (let i = 0; i < 4; i++) {
        const nfx = e[0] + dx[i];
        const nfy = e[1] + dy[i];
        if (
          nfx >= 0 &&
          nfx < R &&
          nfy >= 0 &&
          nfy < C &&
          maze[nfx][nfy] !== "#" &&
          maze[nfx][nfy] !== "F"
        ) {
          maze[nfx][nfy] = "F";
          newFire.push([nfx, nfy]);
        }
      }
    });
    fire = newFire;

    let newJihoon = [];
    for (const [jx, jy] of jihoon) {
      if (jx === 0 || jx === R - 1 || jy === 0 || jy === C - 1) {
        return answer;
      }

      for (let i = 0; i < 4; i++) {
        const njx = jx + dx[i];
        const njy = jy + dy[i];
        if (
          njx >= 0 &&
          njx < R &&
          njy >= 0 &&
          njy < C &&
          maze[njx][njy] === "." &&
          visited[njx][njy] === false
        ) {
          newJihoon.push([njx, njy]);
          visited[njx][njy] = true;
        }
      }
    }
    jihoon = newJihoon;
  }

  return -1;
}

const result = bfs(jihoon, fire, maze, visited);

console.log(result > 0 ? result : "IMPOSSIBLE");
