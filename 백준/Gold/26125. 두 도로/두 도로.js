const fs = require("fs");
const filepath =
  process.platform === "linux" ? "/dev/stdin" : "./autoever/input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const [N, M, S, T] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () =>
  Array.from({ length: N + 1 }).fill(Infinity)
);

input.slice(1, M + 1).forEach((e) => {
  const [start, end, cost] = e.split(" ").map(Number);
  if (start !== end) {
    graph[start][end] = Math.min(graph[start][end], cost);
  }
});

const INF = Infinity;
const n = N;

// 대각선 0은 먼저 세팅하는 게 보통 더 안전
for (let i = 1; i <= n; i++) graph[i][i] = 0;

for (let k = 1; k <= n; k++) {
  const gk = graph[k]; // 캐싱
  for (let i = 1; i <= n; i++) {
    const gi = graph[i]; // 캐싱
    const ik = gi[k];
    if (ik === INF) continue; // 이 줄만 있어도 꽤 절약됨

    for (let j = 1; j <= n; j++) {
      const via = ik + gk[j];
      if (via < gi[j]) gi[j] = via; // Math.min 대신 if 사용
    }
  }
}
const output = [];

for (let idx = M + 2; idx < input.length; idx++) {
  const e = input[idx];
  let result = Infinity;
  const [s1, e1, c1, s2, e2, c2] = e.split(" ").map(Number);

  result = Math.min(result, graph[S][T]); // start -> end
  result = Math.min(result, graph[S][s1] + c1 + graph[e1][T]); // start -> road 1 -> end
  result = Math.min(result, graph[S][s2] + c2 + graph[e2][T]); // start -> road2 -> end
  result = Math.min(
    result,
    graph[S][s1] + c1 + graph[e1][s2] + c2 + graph[e2][T]
  ); // start -> road1 -> road2 -> end
  result = Math.min(
    result,
    graph[S][s2] + c2 + graph[e2][s1] + c1 + graph[e1][T]
  ); // start -> road2 -> road1 -> end
  output.push(result === Infinity ? -1 : result);
}

console.log(output.join("\n"));
