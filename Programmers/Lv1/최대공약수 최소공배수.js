function solution(n, m) {
    var answer = [];
    var max = n > m ? n : m;

    for (i = max; i > 0; i--) {
        if (n % i == 0 && m % i == 0) {
            answer.push(i)
            break;
        }
    }
    answer.push((n * m) / answer[0])
    console.log(answer)
    return answer;
}

// 최소공배수 = 두 수의 곱 / 최대공약수
// https://school.programmers.co.kr/learn/courses/30/lessons/12940