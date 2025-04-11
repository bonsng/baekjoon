const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, K] = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const bfs = () => {
  const q = [[N, 0]];
  const visited = new Array(100001).fill(false);
  visited[N] = true;

  while (q.length) {
    const [position, time] = q.shift();
    if (position === K) {
      console.log(time);
      return;
    }

    for (let next of [position * 2, position - 1, position + 1]) {
      if (next < 0 || next > 100000 || visited[next]) continue;

      if (next === position * 2) {
        q.unshift([next, time]);
      } else {
        q.push([next, time + 1]);
      }
      visited[next] = true;
    }
  }
};

bfs();
