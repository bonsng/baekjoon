// let [num, ...list] = require('fs').readFileSync(__dirname + "/../input.txt").toString().trim().split('\n');
let [num, ...list] = require('fs').readFileSync("/dev/stdin").toString().trim().split('\n');

// 중복 체크 리스트
let duplList = [];
// 반환 리스트
let returnList = [];

list.forEach(e => {
  // 조건 (대문자)
  let upper = e.toUpperCase();
  // 조건의 단어들 (대문자)
  let upperList = upper.split(' ');
  // 조건의 단어들 (소문자)
  let origin = e.split(' ');
  // 중복 체크
  let chk = false;

  // 조건 1 => 조건의 단어들의 첫 알파벳 체크
  for(let i = 0 ; i < upperList.length; i++){
    if(!duplList.includes(upperList[i][0])){
      duplList.push(upperList[i][0]);
      origin[i] = '['+origin[i][0]+']' + origin[i].substring(1)
      chk = true;
      break;
    }
  }

  // 조건 2 => 조건의 단어들의 전체 체크
  if(!chk){
    for(let i = 0; i < upperList.length; i++){
      for(let r = 0; r < upperList[i].length; r++){
        if(!duplList.includes(upperList[i][r])){
          duplList.push(upperList[i][r]);
          origin[i] = origin[i].substring(0,r)+'['+origin[i][r]+']'+origin[i].substring(r+1);
          chk = true;
          break;
        }
      }
      if(chk) break;
    }    
  }

  returnList.push(chk ? origin.join(' ') : e);
})

returnList.forEach(e => console.log(e));