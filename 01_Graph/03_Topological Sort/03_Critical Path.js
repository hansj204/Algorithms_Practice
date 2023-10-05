const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [N, M, ...pathInfo] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const [startCity, endCity] = pathInfo.pop().split(` `).map(Number);

const nodes = Array.from({length: N + 1}, () => []);
const reverseNodes = Array.from({length: N + 1}, () => []);
const inDegree = Array(Number(N) + 1).fill(0);

const result = Array(Number(N) + 1).fill(0);
let resultCnt = 0;

for(const path of pathInfo) {
    const [s, e, time] = path.split(` `).map(Number)
    
    nodes[s].push([e, time]);
    reverseNodes[e].push([s, time]);
    inDegree[e]++;
}

// 위상 정렬
const queue = [startCity];

while(0 < queue.length) {
    const parentNode = queue.shift();

    for(const [childNode, time] of nodes[parentNode]) {
        inDegree[childNode]--;
        result[childNode] = Math.max(result[childNode], result[parentNode] + time); 
        
        if (inDegree[childNode] === 0) {
            queue.push(childNode);
        }
    }
}

// 위상 정렬 reverse
const reverseQueue = [endCity];

while(0 < reverseQueue.length) {
    const parentNode = reverseQueue.shift();

    for(const [childNode, time] of reverseNodes[parentNode]) {
        inDegree[childNode]--;
        result[childNode] = Math.max(result[childNode], result[parentNode] + time); 
        
        if (inDegree[childNode] === 0) {
            reverseQueue.push(childNode);
        }

        if (result[childNode] === result[parentNode] - time) {
            resultCnt++;
        }
    }
}

console.log(result[endCity]);
console.log(resultCnt);