const N = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let range = 1,
  block = 1;

while (block < N) {
  block += 6 * range;
  range++;
}

console.log(range);
