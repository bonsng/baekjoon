const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const parentArr = Array.from({ length: N + 1 }).map((_, idx) => idx);
const knowingPeople = input[1].split(" ").slice(1).map(Number);
const parties = input.slice(2).map((e) => e.split(" ").slice(1).map(Number));

const find = (a) => {
  if (parentArr[a] !== a) {
    parentArr[a] = find(parentArr[a]);
  }
  return parentArr[a];
};

const union = (a, b) => {
  const pA = find(a);
  const pB = find(b);
  parentArr[pB] = pA;
};

for (let i = 1; i < knowingPeople.length; i++) {
  union(knowingPeople[0], knowingPeople[i]);
}

for (const party of parties) {
  for (let i = 1; i < party.length; i++) {
    union(party[0], party[i]);
  }
}

let answer = M;
const target = knowingPeople.length > 0 ? find(knowingPeople[0]) : -1;

for (const party of parties) {
  for (const person of party) {
    if (find(person) === target) {
      answer -= 1;
      break;
    }
  }
}

console.log(answer);
