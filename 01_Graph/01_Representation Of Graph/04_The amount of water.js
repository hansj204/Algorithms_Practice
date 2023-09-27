// https://www.acmicpc.net/problem/2251
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [A, B, C] = require(`fs`).readFileSync(filePath).toString().trim().split(` `).map(Number);
const Sender = [0,0,1,1,2,2];
const Receiver = [1,2,0,2,0,1];

let visited = Array.from({ length: 201 }, () => Array.from({ length: 201 }, () => Array(201).fill(false)));
let result = Array.from({ length: 201 });

BFS();

for(let idx = 0; idx < 201; idx++) {
  if(result[idx]) process.stdout.write(idx + ' ');
}

function BFS() {
  const queue = [[0, 0]];
  visited[0][0] =true;
  result[visited[2]] = true;

  while(0 < queue.length) {
      const [a, b] = queue.shift();

      for(let k =0; i < 6; i++) {
        const next = [A, B, C];
        if(next[Receiver[k]] > now[Receiver[k]]) {
          next[Sender[k]] = next[Receiver[k]] - now[Receiver[k]];
          next[Receiver[k]] = now[Receiver[k]]
        }

        if(!visited[next[0][1]]) {
          visited[next[0][1]] = true;
          queue.add([next[0], next[1]]);

          if(next[0] == 0) result[next[2]] = true;
        }
      }

      for(const childNode of nodes[parentNode]) {
          visited[childNode]++;
          queue.push(childNode);
       }
  }
}
