function solution(s) {
    if (s.length != 4 && s.length != 6) return false;
    if (/\D/.test(s)) return false;      // \D : 숫자가 아닌 문자
    return true;
}

// length 부분도 정규식으로 표현할 수 있다.
// inNaN() 함수를 사용할 수도 있을 것이다.
// https://school.programmers.co.kr/learn/courses/30/lessons/12918