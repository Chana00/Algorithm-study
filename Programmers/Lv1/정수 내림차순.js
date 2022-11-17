// 정수를 내림차순으로 정렬하여 출력

function solution(n) {
    var answer = n.toString().split("").sort((a, b) => {
        return b-a;
    }).join("");
    return parseInt(answer);
}

console.log(solution(118372))

// https://school.programmers.co.kr/learn/courses/30/lessons/12933
