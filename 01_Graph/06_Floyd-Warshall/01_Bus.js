// https://www.acmicpc.net/problem/14404
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [N, M, ...edge] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const edgeList = edge.map(e => e.split(` `).map(Number))
const distance = Array.from({ length: Number(N) + 1 }, (_, i) =>
  Array.from({ length: Number(N) + 1 }, (_, j) => (i === j ? 0 : Infinity))
);

for(let idx = 0; idx < Number(M); idx++) {
    const [s, e, v] = edgeList[idx];
    if(distance[s][e] > v) distance[s][e] = v;
}

for (let k = 1; k <= Number(N); k++) {
    for (let i = 1; i <= Number(N); i++) {
        for (let j = 1; j <= Number(N); j++) {
            if (distance[i][k] + distance[k][j] < distance[i][j]) {
                distance[i][j] = distance[i][k] + distance[k][j];
            }
        }
    }
}

for (let i = 1; i <= Number(N); i++) {
    for (let j = 1; j <= Number(N); j++) {
        if (distance[i][j] == Infinity) process.stdout.write(`0 `);
        else process.stdout.write(`${distance[i][j]} `)
    }
    console.log()
}
