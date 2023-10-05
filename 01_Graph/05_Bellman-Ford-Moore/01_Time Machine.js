// https://www.acmicpc.net/problem/11657
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [info, ...edge] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const [N, M] = info.split(` `).map(Number);
const edgeList = edge.map(e => e.split(` `).map(Number))

const distance = Array.from({length: N + 1}, () => Number.MAX_VALUE);

distance[1] = 0;

for(let i = 0; i < N; i++) {
    for(let j = 0; j < M; j++) {
        const [start, end, time] = edgeList[j];
        if(distance[start] != Number.MAX_VALUE && distance[end] > distance[start] + time) {
            distance[end] = distance[start] + time;
        }
    }    
}

distance.splice(0, 2);

if(0 < distance.filter(dis => dis < 0).length) {
    console.log(-1)
} else {
    for(const dis of distance) {
        if(dis === Number.MAX_VALUE) console.log(-1)
        else                         console.log(dis)
    }
}