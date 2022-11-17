function solution(s) {
    return s.length % 2 == 0 ? answer = s.substr(s.length / 2 - 1, 2) : answer = s.substr(s.length / 2, 1);
}

// 처음엔 if문이었다가 삼항연산자로 줄였다.
// https://school.programmers.co.kr/learn/courses/30/lessons/12903