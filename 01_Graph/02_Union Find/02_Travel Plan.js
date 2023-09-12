// https://www.acmicpc.net/problem/1976
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [N, M, ...cityOrigin] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

const parent = Array.from({length: Number(N) + 1}, (v, i) => i);
const cityList = [[], ...cityOrigin.map(city => [0, ...city.split(` `).map(Number)])];
//const route = [0 , cityList.pop()];

for(let i = 1; i <= Number(N); i++) {
    for(let j = 1; j <= Number(N); j++) {
        if(1 === cityList[i][j]) {
            console.log(i, j)
            union(i, j)
            console.log(parent)
        }
    }   
}

console.log(parent)

// for(const route of cityList) {
//     const [question, a,b] = route;

//     console.log(a,b)

//     if(1 === question) {
//         union(a, b);
//     }
// }

function union(a, b) {
    a = find(a);
    b = find(b);

    if(a !== b) parent[b] = a;
}

function find(val) {
    if(val === parent[val]) return val;
    else parent[val] = find(parent[val]);
}