const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ...input] = require("fs")
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n");

class Team {
  constructor(id, qNum) {
    this.id = id;
    this.scores = new Array(qNum).fill(0);
    this.submit = 0;
    this.lastSubmit = 0;
    this.total = 0;
  }

  addScore(score, num, index) {
    if (this.scores[num - 1] < score) {
      this.scores[num - 1] = score;
      this.total = this.scores.reduce((acc, cur) => acc + cur);
    }
    this.submit++;
    this.lastSubmit = index;
  }
}

let start = 0;
for (let i = 0; i < +N; i++) {
  const [n, k, t, m] = input[start].split(" ").map(Number);
  const logs = input.slice(start + 1, start + m + 1);
  const teams = new Array(n).fill(0).map((_, idx) => {
    return new Team(idx + 1, k);
  });

  logs.forEach((log, index) => {
    const [i, j, s] = log.split(" ").map(Number);
    teams[i - 1].addScore(s, j, index);
  });
  teams.sort((a, b) => {
    if (a.total !== b.total) {
      return b.total - a.total;
    } else {
      if (a.submit !== b.submit) {
        return a.submit - b.submit;
      } else {
        return a.lastSubmit - b.lastSubmit;
      }
    }
  });

  for (let j = 0; j < teams.length; j++) {
    if (teams[j].id === t) {
      console.log(j + 1);
      break;
    }
  }

  start += m + 1;
}
