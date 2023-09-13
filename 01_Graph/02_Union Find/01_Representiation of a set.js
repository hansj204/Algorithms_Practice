// https://www.acmicpc.net/problem/1717
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [info, ...setOrigin] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const [N, M] = info.split(` `).map(Number);
const setList = setOrigin.map(set => set.split(` `).map(Number))
const parent = Array.from({length: N + 1}, (v, i) => i);

for(const set of setList) {
    const [question, a,b] = set; 

    if(0 === question) {
        union(a, b);
    } else {
        console.log(checkSameSet(a, b)? `YES` : `NO`) 
    }
}

function union(a, b) {
    a = find(a);
    b = find(b);

    if(a !== b) parent[b] = a;
}

function find(val) {
    if(val === parent[val]) return val;
    return parent[val] = find(parent[val]);
}

function checkSameSet(a, b) {
    a = find(a);
    b = find(b);

    return a === b;
}