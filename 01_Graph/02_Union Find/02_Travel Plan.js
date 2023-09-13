// https://www.acmicpc.net/problem/1976
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const lines = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const N = parseInt(lines[0]);
const M = parseInt(lines[1]);
const parent = Array.from({length: N + 1}, (v, i) => i);
const cityList = lines.slice(2).map(row => row.split(' ').map(Number));
const route = cityList.pop();
let connected = true;

for(let i = 1; i <= N; i++) {
    for(let j = 1; j <= N; j++) {
        if(1 === cityList[i - 1][j - 1]) {
            union(i, j)
        }
    }   
}

const firstCity = find(route[0]);

for (let i = 1; i < route.length; i++) {
    if (find(route[i]) !== firstCity) {
        connected = false;
        break;
    }
}

console.log(connected ? 'YES' : 'NO');

function union(a, b) {
    a = find(a);
    b = find(b);

    if(a !== b) parent[b] = a;
}

function find(val) {
    if(val === parent[val]) return val;
    return parent[val] = find(parent[val]);
}