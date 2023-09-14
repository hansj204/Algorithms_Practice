// https://www.acmicpc.net/problem/1707
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const lines = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const K = parseInt(lines[0]);
const nodeList = lines.slice(1).map(line => line.split(` `).map(Number));
const nodes = [[]];

const checked = [[]];
let isEven = true;

for(const node of nodeList) {
    const [V , E] = node;
    
    if(!nodes[V]) nodes[V] = [];
    if(!nodes[E]) nodes[E] = [];

    nodes[V].push(E)
    nodes[E].push(V)
}

const V = Math.max(...nodeList.map(node => node[0]));
const visited = Array.from({length: V + 1}, () => 0);

for(let idx = 1; idx <= V; idx++) {
    if(isEven) DFS(idx);
    else break;
}

console.log(isEven? 'YES'  : 'NO')

function DFS(node) {
    visited[node] = true;

    for(const childNode of nodes[parentNode]) {
        if(!visited[childNode]) {
            // 인접한 노드는 같은 지밥이아님으로 이전 노드와 다른 집합으로 처리
            checked[childNode] = (checked[node] + 1) % 2;
            DFS(childNode);
        } else if(checked[node] == checked[childNode]) {
            // 방문한 노드가 현재 내 노드와 같으면 이분 그래프 X
            isEven = false;
        }
    }
}
