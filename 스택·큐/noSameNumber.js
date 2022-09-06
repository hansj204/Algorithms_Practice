function solution(arr)
{
    var answer = [];

    for(elm of arr) {
        if(elm === answer[answer.length - 1]) continue;
        answer.push(elm);
    }

    return answer;
}

console.log(solution([1,1,3,3,0,1,1]))