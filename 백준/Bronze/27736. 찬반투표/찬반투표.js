const fs = require("fs");
const filepath = "/dev/stdin";
const [N, input] = fs.readFileSync(filepath).toString().trim().split("\n");

const dict = { 0: 0, 1: 0, "-1": 0 };

input.split(" ").forEach((e) => {
  dict[e]++;
});

if (dict["0"] >= Math.ceil(+N / 2)) {
  console.log("INVALID");
} else if (dict["-1"] >= dict["1"]) {
  console.log("REJECTED");
} else {
  console.log("APPROVED");
}