function solution(arr, divisor) {
    var answer = [];
    for (const e of arr) {
        if (e % divisor === 0)
            answer.push(e)
    }
    if (answer.length == 0)
        answer.push(-1)
    return answer.sort((a, b) => a - b);
}

// filter 기능을 사용하는 방법도 있다.
// https://school.programmers.co.kr/learn/courses/30/lessons/12910/solution_groups?language=javascript