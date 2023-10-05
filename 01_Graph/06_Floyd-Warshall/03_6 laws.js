// https://www.acmicpc.net/problem/1389
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [info, ...peo] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const [N, M] = info.split(` `).map(Number);
const people = peo.map(e => e.split(` `).map(Number))
const relation = Array.from({ length: Number(N) + 1 }, (_, i) =>
  Array.from({ length: Number(N) + 1 }, (_, j) => (i === j ? 0 : Infinity))
);

for(const [s, e] of people) {
    relation[s][e] = 1;
    relation[e][s] = 1;
}

for (let k = 1; k <= N; k++) {
    for (let i = 1; i <=N; i++) {
        for (let j = 1; j <= N; j++) {
            if (relation[i][k] + relation[k][j] < relation[i][j]) {
                relation[i][j] = relation[i][k] + relation[k][j];
            }
        }
    }
}

let min = Number.MAX_VALUE;
let answer = -1;

for (let i = 1; i <= N; i++) {
    let temp = 0;
    for (let j = 1; j <= N; j++) {
       temp += relation[i][j];
    }

    if(min > temp) {
        min = temp;
        answer = i;
    }
}

console.log(answer)