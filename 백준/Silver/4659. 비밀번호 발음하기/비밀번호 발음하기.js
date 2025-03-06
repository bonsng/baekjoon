const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n').map(v => v.trim());
input.pop();

//모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
//모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
//같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
const answer = [];
input.forEach(v => {
  if (hasVowel(v) && noThree(v) && sameLetter(v)) {
    answer.push(`<${v}> is acceptable.`)
  } else {
    answer.push(`<${v}> is not acceptable.`)
  }
})

console.log(answer.join('\n'))

function hasVowel(str) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowel.length; i++) {
    if (str.includes(vowel[i])) {
      return true;
    }
  }
  return false;
}

function noThree(str) {
  const vowel = "aeiou";
  if (str.length < 3) {
    return true;
  } else {
    for (let i = 2; i < str.length; i++) {
      const pprev = vowel.includes(str[i - 2]);
      const prev = vowel.includes(str[i - 1])
      if (pprev == prev && prev == vowel.includes(str[i])) {
        return false;
      }
    }
    return true;
  }
}

function sameLetter(str) {
  if (str.length < 2) {
    return true;
  } else {
    for (let i = 1; i < str.length; i++) {
      if ((str[i - 1] == 'e' && str[i] == 'e') || (str[i - 1] == 'o' && str[i] == 'o')) continue;
      if (str[i - 1] == str[i]) {
        return false;
      }
    }
    return true
  }
}