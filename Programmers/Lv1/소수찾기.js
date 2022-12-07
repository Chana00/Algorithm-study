/* 01
function solution(n) {
    let answer = 0;

    for (i = 2; i <= n; i++) {
        for (j = 2; j < i; j++) {
            if (i % j === 0) {
                answer -= 1;
                break;
            }
        }
        answer += 1;
    }
    return answer;
}
// 효율성에서 아웃
*/

/* 02
function solution(n) {
    let answer = 0;
    let demical;

    for (i = 2; i <= n; i++) {
        demical = true;
        for (j = 2; j <= i / 2; j++) {
            if (i % j === 0) {
                demical = false;
                break;
            }
        }
        if (demical) answer += 1;
    }
    return answer;
}
// 약수를 반으로 줄였지만 마지막 케이스에서 타임아웃
*/

// --- 여기서부터 소수구하는 방법 검색한 결과,
// n의 제곱근까지만 돌아도 된다고 한다
/* 03
function solution(n) {
    let answer = 0;
    let demical;

    for (i = 2; i <= n; i++) {
        demical = true;
        for (j = 2; j*j <= i; j++) {
            if (i % j === 0) {
                demical = false;
                break;
            }
        }
        if (demical) answer += 1;
    }
    return answer;
}
// 근데 효율성 마지막에서 삑났다.
*/

//결론은, 에라토스테네스의 체 알고리즘을 사용하는 문제였다.
function solution(n) {
    const prime = [false, false, ...Array(n - 1).fill(true)];

    for (i = 2; i * i < n; i++) {
        if (!prime[i]) continue; // 소수가 아니면 패스
        for (j = i * 2; j <= n; j += i) {   // 소수 i의 배수를 모두 지운다.
            prime[j] = false;
        }

    }
    return prime.filter(Boolean).length;
}

solution(10)


// 소수가 중요한 이유는.. 암호화방식에 소수를 많이 사용하기 때문이라고 한다 예) RSA
// https://school.programmers.co.kr/learn/courses/30/lessons/12921