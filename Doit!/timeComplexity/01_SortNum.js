//2750
const lines = require('fs').readFileSync(`/dev/stdin`).toString().trim().split(`\n`);
let numArr = [ ...new Set(lines.map(Number)) ];
numArr = numArr.sort((a,b) => a - b)

for(num of numArr) {
    console.log(num);
}



