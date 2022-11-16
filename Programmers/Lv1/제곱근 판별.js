//제곱근 판별하기

function solution(n) {
    var a = Math.sqrt(n);
    if ((a % 1) === 0) return (a + 1) * (a + 1)
    else return -1;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12934