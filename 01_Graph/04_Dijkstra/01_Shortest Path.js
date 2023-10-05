// https://www.acmicpc.net/problem/1753
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [info, K, ...edge] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);
const [N, M] = info.split(` `).map(Number)

const nodes = Array.from({length: N + 1}, () => []);
const visited = Array.from({length: N + 1}, () => 0);

// set node
for(const dis of edge) {
    const [U, V, W] = dis.split(` `).map(Number)
    nodes[U].push([V, W])
}

// dijkstra
const queue = [Number(K)];
visited[Number(K)] = 0;

while(0 < queue.length) {
    const parentNode = queue.shift();

    for(const childNode of nodes[parentNode]) {
        const [V, W] = childNode;
        if(0 !== visited[V]) continue;

        visited[V] += (W + visited[parentNode]);
        queue.push(V);
    }
}

// output
visited.splice(0, 1);

for(let idx = 1; idx <= visited.length; idx++) {
    if(0 === visited[idx]) visited[idx] = 'INF';
}

console.log(visited.join('\n'))