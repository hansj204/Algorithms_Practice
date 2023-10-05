// https://www.acmicpc.net/problem/1516 => ???
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [N, ...buildingList] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const nodes = Array.from({ length: Number(N) + 1 }, () => []);
const inDegree = Array(Number(N) + 1).fill(0);
const result = Array(Number(N) + 1).fill(0);

// set node
for (let idx = 0; idx < Number(N); idx++) {
    const info = buildingList[idx].split(` `).map(Number);
    info.splice(info.length - 1);

    const [time, ...pre] = info;
    result[idx + 1] = time;

    for (const p of pre) {
        nodes[p].push(idx + 1);
        inDegree[idx + 1]++;
    }
}

// 위상 정렬
const queue = [];

for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) {
        queue.push(i);
    }
}

while (queue.length > 0) {
    const node = queue.shift();

    for (const childNode of nodes[node]) {
        inDegree[childNode]--;
        result[childNode] = Math.max(result[childNode], result[node] + result[childNode]); 
        
        if (inDegree[childNode] === 0) {
            queue.push(childNode);
        }
    }
}

// output
for (let idx = 1; idx <= N; idx++) {
    console.log(result[idx]);
}