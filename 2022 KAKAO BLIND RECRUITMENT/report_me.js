// My answer
function solution(id_list, report, k) {
    const answer = [];
    const reportList = id_list.map(id => []); // [[각 id의 신고한 목록], ...]]
    const reportedIds = id_list.map(id => 0);  //[[각 id의 신고당한 횟수], ...]]

    for(let content of report) {
        const ids = content.split(' ');
        const reportId = id_list.indexOf(ids[0]);
        const reportedId = id_list.indexOf(ids[1]);

        if(reportList[reportId].includes(reportedId)) continue;

        reportList[reportId].push(reportedId);
        reportedIds[reportedId] += 1;
    }

    for(let index = 0; index < id_list.length; index++) {
        //신고 당한 횟수가 k 이상인지 확인
        const reportCnt = reportList[index].filter(reportedIdx => reportedIds[reportedIdx] >= k ).length;
        answer.push(reportCnt)
    }

    return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"], 2))
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3))