function solution(n) {
    let divisor = 0;

    do {
        divisor++;
    } while(1 != n%divisor);

    return parseInt(divisor);
}

console.log(solution(13))