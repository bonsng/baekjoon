
function solution(n, works) {
    const workSum = works.reduce((sum, acc) => sum + acc);
    if(workSum <= n) return 0;
    let worksArr = works.sort((a,b) => b-a);
    
    while(n > 0) {
        let max = worksArr[0];
        for(let i=0; i<worksArr.length; i++) {
            if(n===0) break;
            if (max === worksArr[i]) {
                worksArr[i] -= 1;
                n--;
            } else {
                break;
            }
        }
    }
    
    return worksArr.reduce((acc, cur) => {
        return acc += cur ** 2;
    },0);
}