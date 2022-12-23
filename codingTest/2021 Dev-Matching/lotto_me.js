function solution(lottos, win_nums) {
    const answer = [];

    const score = [6,5,4,3,2,1];
    const correctLotto = lottos.filter(lotto => win_nums.includes(lotto)).length;
    const invisibleNumber = lottos.filter(lotto => lotto === 0).length;

    answer[0] = score[0 > (correctLotto+invisibleNumber) - 1 ? 0 : (correctLotto+invisibleNumber) - 1];
    answer[1] = score[0 > correctLotto - 1 ? 0 : correctLotto - 1] ;

    return answer;
}

// [3, 5]
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]))