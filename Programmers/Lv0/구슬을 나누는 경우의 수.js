function factorial(num) {
    let res = BigInt(1);
    for (i = BigInt(1); i <= num; i++) res *= i;
    console.log(res)
    return res;
}

function solution(balls, share) {
    var answer = 0;
    answer = factorial(balls) / ((factorial(balls - share) * factorial(share)));
    return answer;
}

// 1. 재귀함수 시도 -> 런타임 아웃으로 실패
// 2. int보다 큰 수 문제 -> BigInt() 함수 사용
//https://school.programmers.co.kr/learn/courses/30/lessons/120840