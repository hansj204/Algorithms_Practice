function maxNum(sizeList, index) {
    return Math.max(...sizeList.map(size => size[index]));
}

function solution(sizes) {
    const sizeList = sizes.map(size => size.sort((a, b) => a - b ));
    return maxNum(sizeList, 0) * maxNum(sizeList, 1);
}

console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]))