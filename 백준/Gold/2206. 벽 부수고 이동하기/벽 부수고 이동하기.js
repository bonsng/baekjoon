const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const fs = require("fs");
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => [0, 0])
);
const queue = [[0, 0, 0]];
visited[0][0][0] = 1;

function BFS() {
  let idx = 0;
  while (idx !== queue.length) {
    const [x, y, wallBroken] = queue[idx];

    if (x === N - 1 && y === M - 1) {
      return visited[x][y][wallBroken];
    }

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
        if (input[nx][ny] === "0" && visited[nx][ny][wallBroken] === 0) {
          visited[nx][ny][wallBroken] = visited[x][y][wallBroken] + 1;
          queue.push([nx, ny, wallBroken]);
        } else if (input[nx][ny] === "1" && wallBroken === 0) {
          visited[nx][ny][wallBroken + 1] = visited[x][y][wallBroken] + 1;
          queue.push([nx, ny, wallBroken + 1]);
        }
      }
    }
    idx++;
  }
  return -1;
}

console.log(BFS());
