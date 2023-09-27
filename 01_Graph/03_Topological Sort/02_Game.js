// https://www.acmicpc.net/problem/2252
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [info, ...edge] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`)

const [N, M] = info.split(` `).map(Number)

const nodes = Array.from({length: N + 1}, () => []);
const visited = Array.from({length: N + 1}, () => 0);
const queue = [];

for(const dis of edge) {
    const [A , B] = dis.split(` `).map(Number)
    nodes[A].push(B)

    queue.push(A);
    visited[B]++;
}

queue.forEach(edge => {
    BFS(edge);
})

function BFS(node) {
    const queue = [node];

    while(0 < queue.length) {
        const parentNode = queue.shift();

        process.stdout.write(parentNode + ` `)

        for(const childNode of nodes[parentNode]) {
            visited[childNode]--;

            if(0 === visited[childNode]) queue.push(childNode);
         }
    }
}