// 11720
/* 슈도코드
    숫자 갯수, 숫자 입력

    숫자 한글자씩 잘라서 배열에 저장
    숫자 객수와 숫자 배열 길이가 같은지 확인

    FOR(숫자 배열) {
        숫자 하나씩 더하기
    }

    더한 숫자 출력
*/
const lines = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
const numArr = lines[1].split('');
let answer = 0;

if(Number(lines[0]) !== numArr.length) return;

for(const num of numArr) {
    answer += Number(num);
}

// numArr.reduce(function(acc, a) { return acc + (+a); }, 0))

console.log(answer)

