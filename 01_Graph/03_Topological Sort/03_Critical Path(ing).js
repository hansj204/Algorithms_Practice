// https://www.acmicpc.net/problem/1516
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [N, ...building] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const nodes = Array.from({length: N + 1}, () => []);
const visited = Array.from({length: N + 1}, () => 0);

for(const build of building) {
    const [A , B = 0, end] = build.split(` `).map(Number)
    nodes[A].push(B);
}

console.log(nodes)