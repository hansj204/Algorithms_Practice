// 11659
/* 슈도코드
    데이터 개수, 질의 개수 입력
    구간합을 구할 대상 배열 입력
    질의 입력
    변수 ARR 선언
    
    FOR(질의 갯수) {
        변수 ARR에 질의 저장
    }

    FOR(질의 갯수) {
        각 구간 합 출력
    }
*/
const lines = require('fs').readFileSync(`/dev/stdin`).toString().trim().split(`\n`);
const [dataCnt, questionCnt] = lines[0].trim().split(` `);
const numArr = lines[1].trim().split(` `).map(Number);

if(Number(dataCnt) !== numArr.length || Number(questionCnt) !== lines.length - 2) return;

let sumArr = [0];

for(let idx = 1; idx <= numArr.length; idx++) {
    sumArr.push(sumArr[idx-1] + numArr[idx-1]);
}

for(let idx = 2; idx < lines.length; idx++) {
    const question = lines[idx].trim().split(` `).map(Number);
    console.log(sumArr[question[1]] - sumArr[question[0] - 1]);
}
