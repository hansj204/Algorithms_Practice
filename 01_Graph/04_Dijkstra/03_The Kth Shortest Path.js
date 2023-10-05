const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [info, ...edge] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);
const [N, M, K] = info.split(` `).map(Number);

// set node
const nodes = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => []);

for (const dis of edge) {
    const [a, b, c] = dis.split(` `).map(Number);
    nodes[a].push([b, c]);
}

// dijkstra
const queue = [[1, 0]];
visited[1].push(0);

while (queue.length > 0) {
    const [pb, pc] = queue.shift();

    for (const [cb, cc] of nodes[pb]) {
        if (visited[cb].length >= K) continue;

        const cost = pc + cc;

        visited[cb].push(cost);
        queue.push([cb, cost]);
        queue.sort((a, b) => a[1] - b[1]);
    }
}

// output
for (let idx = 1; idx <= N; idx++) {
    if (visited[idx].length >= K) console.log(visited[idx][K - 1]);
    else console.log(-1);
}