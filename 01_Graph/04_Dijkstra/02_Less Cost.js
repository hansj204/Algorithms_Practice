// https://www.acmicpc.net/problem/1916
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const lines = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const N = lines[0].split(` `).map(Number);
const M = lines[1].split(` `).map(Number);
const [busS, busE] = lines.pop().split(` `).map(Number)

const nodes = Array.from({length: Number(N) + 1}, () => []);
const visited = Array.from({length: Number(N) + 1}, () => 0);

for(const bus of lines.slice(2)) {
    const [S, E, C] = bus.split(` `).map(Number)
    nodes[S].push([E, C])
}

BFS(busS)

console.log(visited[busE])

function BFS(node) {
    const queue = [node];
    visited[node] = 0;

    while(0 < queue.length) {        
        const parentNode = queue.shift();

        for(const childNode of nodes[parentNode]) {
            const [V, W] = childNode;

            if(0 !== visited[V] && visited[V] < (W + visited[parentNode])) continue;
            
            visited[V] = (W + visited[parentNode]);
            queue.push(V);
         }
    }
}