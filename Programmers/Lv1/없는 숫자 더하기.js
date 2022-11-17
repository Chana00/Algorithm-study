function solution(numbers) {
    var answer = 45;    // 1~9를 모두 더한 수
    for (const n of numbers)
        answer -= n;
    return answer;
}

// numbers의 모든 원소 범위가 커질 경우 모든 값을 먼저 더한 수를 만들거나
// !numbers.includes(i) 를 통해 배열에 없는 값만 더하도록 코드를 작성할 수도 있다.
// for대신 reduce()를 사용할 수 있다.
// https://school.programmers.co.kr/learn/courses/30/lessons/86051?language=javascript 