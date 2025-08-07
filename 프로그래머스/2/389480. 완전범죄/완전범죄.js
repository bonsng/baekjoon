function solution(info, n, m) {
    let answer = 0;
    info.sort((a,b) => b[0]/b[1] - a[0]/a[1]);
    let index = 0;
    let b = 0;
    let a = 0;
    for (let i = 0 ; i<info.length;i++){
        if(b+info[i][1] < m) {
            b += info[i][1];
        } else {
            a += info[i][0];
        }
    }
    
    if (a < n) return a;
    return -1;
}