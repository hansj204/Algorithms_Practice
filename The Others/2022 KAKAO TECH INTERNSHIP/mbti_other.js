// The best answer I think
function solution(survey, choices) {
    const data = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }

    for (let i = 0; i < survey.length; i++) {
        const score = choices[i] - 4
        let type = survey[i].split('')[score < 0 ? 0 : 1] 
        data[type] += Math.abs(score)
    }

    const { R, T, C, F, J, M, A, N } = data
    return `${R >= T ? 'R' : 'T'}${C >= F ? 'C' : 'F'}${J >= M ? 'J' : 'M'}${A >= N ? 'A' : 'N'}`
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]))
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]))