function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}