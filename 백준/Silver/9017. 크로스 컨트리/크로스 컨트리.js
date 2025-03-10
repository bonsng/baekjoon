const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().split("\n");

const T = +input.shift();

for (let i = 0; i < T; i++) {
  let N = +input[2 * i];
  let scores = input[2 * i + 1].split(" ").map(Number);

  solution(N, scores);
}

function solution(N, scores) {
  let teams = {};
  for (let i = 0; i < N; i++) {
    if (!teams[scores[i]]) {
      teams[scores[i]] = [i + 1];
    } else {
      teams[scores[i]].push(i + 1);
    }
  }
  let uncertified = [];
  for (const name of Object.keys(teams)) {
    if (teams[name].length !== 6) {
      uncertified.push(+name);
    }
  }
  let rank = 1;
  let certified = {};
  for (const t of scores) {
    if (uncertified.includes(t)) continue;
    else {
      if (!certified[t]) {
        certified[t] = [rank, 2, 0];
      } else {
        if (certified[t][1] === 5) {
          certified[t][2] = rank;
        } else if (certified[t][1] < 5) certified[t][0] += rank;
        certified[t][1]++;
      }
      rank++;
    }
  }

  const teamNums = Object.keys(certified);
  let answer = teamNums[0];
  let minScore = certified[teamNums[0]][0];

  for (let i = 1; i < teamNums.length; i++) {
    if (minScore < certified[teamNums[i]][0]) continue;
    else if (minScore === certified[teamNums[i]][0]) {
      if (certified[answer][2] > certified[teamNums[i]][2]) {
        answer = teamNums[i];
      }
    } else {
      answer = teamNums[i];
      minScore = certified[teamNums[i]][0];
    }
  }

  console.log(answer);
}
