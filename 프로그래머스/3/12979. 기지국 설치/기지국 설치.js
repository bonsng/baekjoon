function solution(n, stations, w) {
    let empty = [];
    let answer = 0;
    let cover = 2*w+1;
    if (stations[0] - w - 1 > 0) answer += Math.ceil((stations[0] - w - 1) / cover);
    
    if (stations.length > 1) {
        for (let i=1 ; i<stations.length; i++) {
            if (stations[i] - stations[i-1] - 1 - 2 * w > 0) answer += Math.ceil((stations[i] - stations[i-1] - 1 - 2 * w) / cover);
        }
    }
    
    if (n - stations[stations.length - 1] - w > 0) answer += Math.ceil((n - stations[stations.length - 1] - w) / cover);
    

    return answer;
}