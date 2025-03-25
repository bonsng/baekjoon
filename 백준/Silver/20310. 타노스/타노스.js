const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let S = require("fs").readFileSync(filepath).toString().trim().split("");
let one = 0;
let zero = 0;
for (const s of S) {
  s === "1" ? one++ : zero++;
}
one /= 2;
zero /= 2;

let i = 0;
let j = S.length - 1;

while (one > 0) {
  if (S[i] === "1") {
    S[i] = "";
    one--;
  }
  i++;
}

while (zero > 0) {
  if (S[j] === "0") {
    S[j] = "";
    zero--;
  }
  j--;
}

console.log(S.join(""));
