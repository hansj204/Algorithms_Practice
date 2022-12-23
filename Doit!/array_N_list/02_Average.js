// 1546
/* 슈도코드
    과목 개수, 시험 성적 입력
    변수 M에 최대값 구해서 저장
    변수 SUM 선언
    
    FOR(과목 개수) {
        과목점수 = 현재과목점수 / M * 100
        변수 SUM에 다시 계산한 과목점수 더하기
    }

    평균(SUM / 과목 개수) 출력
*/
const [n, input] = require('fs').readFileSync(`/dev/stdin`).toString().trim().split(`\n`);
const inputArr = input.trim().split(` `);

const subjectCnt = Number(n);
const scoreArr = inputArr.map(score => Number(score));
const M = Math.max(...scoreArr);
let SUM = 0;

for(let idx = 0; idx < scoreArr.length; idx++) {
    SUM += scoreArr[idx] / M * 100;
}

console.log(SUM / subjectCnt)