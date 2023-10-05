// https://www.acmicpc.net/problem/1219
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const lines = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const [N, SC, EC, M] = lines.shift().split(` `).map(Number);
const money = lines.pop().split(` `).map(Number);
const transport = lines.map(line => line.split(` `).map(Number));

const distance = Array.from({length: N}, () => -Infinity);

distance[SC] = money[SC];

for(let i = 0; i <= N; i++) {
    for(let j = 0; j < M; j++) {
        const [start, end, price] = transport[j];

        if(distance[start] == -Infinity) {
            continue;
        } else if(distance[start] == Infinity)  {
            distance[end] = Infinity;
        } else if(distance[end] < distance[start] + money[end] - price) {
            distance[end] = distance[start] + money[end] - price;

            if(i >= N - 1) distance[end] = Infinity;
        }
    }    
}

if(distance[EC] === -Infinity) console.log(`gg`);
else if(distance[EC] === Infinity) console.log(`Gee`);
else console.log(distance[EC])