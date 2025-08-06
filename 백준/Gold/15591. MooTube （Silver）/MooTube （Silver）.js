 let fs = require("fs");
    let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
    let [N, M] = input.shift().split(' ').map(Number);
    let lines = input.splice(0, N - 1).map(v => v.split(' ').map(Number));
    input = input.map(v => v.split(' ').map(Number));

    let lists = new Array(N + 1).fill().map(_ => []);
	// 연결 리스트 형식의 배열로 저장 [ 노드 번호, USADO ]
    for (const line of lines) {
        const [start, goal, cost] = line;
        lists[start].push([goal, cost]);
        lists[goal].push([start, cost]);
    }
	// BFS 함수
    const BFS = (limit, start) => {
        let visited = new Array(N + 1).fill(false);
      	// 시작 노드 체크
        visited[start] = true;
        let cnt = 0;
        let Queue = [start];
      	// shift() 함수를 사용하지 않기 위해 인덱스 변수 사용.
        let idx = 0;
        while (Queue.length > idx) {
            let now = Queue[idx];
          	// 연결 리스트 안을 순회.
            for (let i = 0; i < lists[now].length; i++) {
				// 연결 리스트 하나하나 확인.
                let [nextNode, nextCost] = lists[now][i];
              	// 만약 아직 가지 않은 노드라면.
                if (!visited[nextNode]) {
                  	// 해당 노드의 USADO가 K 이상인지 확인.
                    if (nextCost >= limit) {
                        visited[nextNode] = true;
                        Queue.push(nextNode);
                        cnt++;
                    }
                }
            }
          	// 큐의 다음 인덱스 확인.
            idx++;
        }
        return cnt;
    };

    const solution = (INPUT) => {
        let answer = [];
        for (const inputElement of INPUT) {
            const [LIMIT, NODE] = inputElement;
            answer.push(BFS(LIMIT, NODE));
        }
        console.log(answer.join('\n'));
    };
    solution(input);