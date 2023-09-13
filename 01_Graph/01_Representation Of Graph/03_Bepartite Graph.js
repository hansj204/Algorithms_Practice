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
    if(isEven) BFS(idx);
    else break;
}

console.log(isEven? 'YES'  : 'NO')

function BFS(node) {
    const queue = [node];
    visited[node] = true;

    while(0 < queue.length) {
        const parentNode = queue.shift();

        for(const childNode of nodes[parentNode]) {
            if(!visited[childNode]) {
                checked[childNode] = (checked[node] + 1) % 2;
                BFS(childNode);
            } else if(checked[node] == checked[childNode]) {
                isEven = false;
            }
         }
    }
}
