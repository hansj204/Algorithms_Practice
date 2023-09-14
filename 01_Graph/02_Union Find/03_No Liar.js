// https://www.acmicpc.net/problem/1043
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const lines = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const [N, M] = lines[0].split(` `).map(Number);
const truthPeople = lines[1].split(` `).map(Number);
const partyInfo = lines.slice(2);

const parent = Array.from({length: N + 1}, (v, i) => i);
result = 0;

partyInfo.forEach(line => {
    const [count, ...people] = line.split(` `).map(Number);

    if(1 === count) return;

    for(let i = 1; i < people.length; i++) {
        union(people[0], people[1])
    }
})

for(let i = 0; i < M; i++) {
    let isOk = true;

    for(let i = 1; i < truthPeople.length; i++) {
        if(find(parent[i]) !== find(parent[j])) {
            isOk = false;
            break;
        }
    }

    if(isOk) result++;
}

console.log(result)

function union(a, b) {
    a = find(a);
    b = find(b);

    if(a !== b) parent[b] = a;
}

function find(val) {
    if(val === parent[val]) return val;
    return parent[val] = find(parent[val]);
};