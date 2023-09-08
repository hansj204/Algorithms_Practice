function solution(distance, scope, times) {
    var answer = ``

    for(let index = 1; index <= distance; index++) {
        let checkIdx = -1;
        
        scope.forEach((sc, idx) => {
            if(!(sc[0] <= index && sc[1] >= index)) return;
            checkIdx = idx;
        })

        if(-1 === checkIdx) continue;

        let behavior = 0;
        let jindex = 1;

        do {
            jindex = jindex === 0? 1 : 0;
            behavior += times[checkIdx][jindex] 
        } while(behavior < index) ;

       
        if(jindex === 0) answer = index

    } 

    return answer;
}

console.log(solution(10, [[3, 4], [5, 8]], [[2, 5], [4, 3]])) //8

