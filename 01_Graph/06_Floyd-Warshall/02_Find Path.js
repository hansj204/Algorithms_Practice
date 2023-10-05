// https://www.acmicpc.net/problem/14404
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [N, ...graph] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);
const graphG = graph.map(e => e.split(` `).map(Number))

for (let k = 0; k < Number(N); k++) {
    for (let i = 0; i < Number(N); i++) {
        for (let j = 0; j < Number(N); j++) {
            if (graphG[i][k] == 1 && graphG[k][j] == 1) graphG[i][j] = 1;
        }
    }
}

for (let i = 0; i < Number(N); i++) {
    for (let j = 0; j < Number(N); j++) {
        process.stdout.write(`${graphG[i][j]} `)
    }
    console.log()
}
