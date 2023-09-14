// https://www.acmicpc.net/problem/2251
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [A, B, C] = require(`fs`).readFileSync(filePath).toString().trim().split(` `).map(Number);

let visited = Array.from({ length: 201 }, () => Array.from({ length: 201 }, () => Array(201).fill(false)));
let result = Array.from({ length: 201 });

BFS();

for(let idx = 0; idx < 201; idx++) {
  if(result[idx]) process.stdout.write(idx + ' ');
}

function BFS() {
  const queue = [{0 : 0}];
  visited[0][0] =true;
  result[visited[2]] - true;

  while(0 < queue.length) {
      const parentNode = queue.shift();

      for(const childNode of nodes[parentNode]) {
          visited[childNode]++;
          queue.push(childNode);
       }
  }
}
