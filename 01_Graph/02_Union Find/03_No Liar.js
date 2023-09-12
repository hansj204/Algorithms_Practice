// https://www.acmicpc.net/problem/1976
const filePath = `linux` === process.platform ? `dev/stdin` : `input.txt`;
const [N, M, ...cityOrigin] = require(`fs`).readFileSync(filePath).toString().trim().split(`\r\n`);

