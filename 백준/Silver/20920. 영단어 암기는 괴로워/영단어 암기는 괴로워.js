const fs = require("fs");
const [NnM, ...words] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = NnM.split(" ").map(Number);

const list = [];
const dict = {};

// 사전 순 정렬
const setOrder = (a, b, n) => {
  for (let i = 0; i < n; i++) {
    if (a[i] !== b[i]) {
      return a[i].charCodeAt() - b[i].charCodeAt();
    }
  }
};

words.forEach((e) => {
  if (e.length >= m) {
    if (dict[e]) {
      dict[e]++;
    } else {
      dict[e] = 1;
      list.push(e);
    }
  }
});

list.sort((a, b) => {
  // 빈도수
  if (dict[a] < dict[b]) return 1;
  
  else if (dict[a] === dict[b]) {
    // 빈도수가 같다면 길이를 비교
    if (a.length < b.length) return 1;
    
    else if (a.length === b.length) {
      // 길이까지 같다면 사전 순으로 나열
      return setOrder(a, b, a.length);
      
    } else return -1;
    
  } else return -1;
});


console.log(list.join("\n"));