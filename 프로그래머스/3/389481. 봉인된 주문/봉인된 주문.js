function solution(n, bans) {
    let banNums = [];
    bans.forEach((e) => {
        banNums.push(wordToNum(e));
    })
    banNums.sort((a,b) => a-b);
    for (let num of banNums) {
        if (num <= n) {
            n++;
        }
    }
    
    return numToWord(n);
}

const wordToNum = (str) =>
  [...str].reduce((a, c) => a * 26 + (c.charCodeAt(0) - 96), 0);

const numToWord = (num) => {
  let result = '';
  while (num > 0) {
    num--;
    const charCode = (num % 26) + 97;
    result = String.fromCharCode(charCode) + result;
    num = Math.floor(num / 26);
  }
  return result;
};