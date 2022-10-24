function solution(numbers) {
    const answer = [1,2,3,4,5,6,7,8,9].filter(number => !numbers.includes(number));
    return answer.reduce((preVal, curVal) => preVal + curVal);
}

console.log(solution([5,8,4,0,6,7,9]))