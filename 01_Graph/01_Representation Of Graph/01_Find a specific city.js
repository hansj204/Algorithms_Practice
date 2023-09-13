// https://www.acmicpc.net/problem/18352
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [info, ...distance] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const [N, M, K, X] = info.split(` `).map(Number)

const nodes = Array.from({length: N + 1}, () => []);
const visited = Array.from({length: N + 1}, () => -1);
const answer = [];

for(const dis of distance) {
    const [A , B] = dis.split(` `).map(Number)
    nodes[A].push(B)
}

BFS(X);

console.log(visited)

for(const [key, value] of Object.entries(visited)) {
    if(value === K) answer.push(key)
}

if(0 === answer.length) {
    console.log(-1)
} else {
    console.log(answer.sort().join(`\n`));
}

function BFS(node) {
    const queue = [node];
    visited[node]++;

    while(0 < queue.length) {
        const parentNode = queue.shift();

        for(const childNode of nodes[parentNode]) {
            if(-1 !== visited[childNode]) continue;

            visited[childNode] = visited[parentNode] + 1;
            queue.push(childNode);
         }
    }
}