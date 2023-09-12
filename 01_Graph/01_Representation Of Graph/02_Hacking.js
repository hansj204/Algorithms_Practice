// https://www.acmicpc.net/problem/1325
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const lines = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const [N, M] = lines[0].split(` `).map(Number);
const trustList = lines.slice(1).map(line => line.split(` `).map(Number));

const nodes = Array.from({length: N + 1}, () => []);
const visited = Array.from({length: N + 1}, () => 0);

for(const trust of trustList) {
    const [A , B] = trust;
    nodes[A].push(B)
}

for(let idx = 1; idx <= N; idx++) {
    BFS(idx);
}

for(const [key, value] of Object.entries(visited)) {
    if(value === Math.max(...visited)) process.stdout.write(key + ` `)
}

function BFS(node) {
    const queue = [node];

    while(0 < queue.length) {
        const parentNode = queue.shift();

        for(const childNode of nodes[parentNode]) {
            visited[childNode]++;
            queue.push(childNode);
         }
    }
}
