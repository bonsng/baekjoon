const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const channels = fs.readFileSync(filepath).toString().trim().split("\n");

channels.shift();

let kbs1Idx = channels.findIndex((e) => e === "KBS1");
let kbs2Idx = channels.findIndex((e) => e === "KBS2");

// 10 03 30
let answer = null;
if (kbs1Idx === 1 && kbs2Idx === 0) {
  answer = ["3"];
} else if (kbs1Idx === 0 && kbs2Idx > 1) {
  let to2 = new Array(kbs2Idx).fill("1");
  let from2 = new Array(kbs2Idx - 1).fill("4");
  answer = [...to2, ...from2];
} else if (kbs2Idx === 0 && kbs1Idx > 1) {
  let to1 = new Array(kbs1Idx).fill("1");
  let from1 = new Array(kbs1Idx).fill("4");
  answer = [...to1, ...from1];
} else {
  let to2 = new Array(kbs2Idx).fill("1");
  let from2 = new Array(kbs2Idx).fill("4");
  let newKbs1Idx = kbs1Idx > kbs2Idx ? kbs1Idx : kbs1Idx + 1;
  let to1 = new Array(newKbs1Idx).fill("1");
  let from1 = new Array(newKbs1Idx).fill("4");
  answer = [...to2, ...from2, ...to1, ...from1];
}

console.log(answer.join(""));
