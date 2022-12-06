const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]


function solution(a, b) {
    var n = b + 4; // 금요일이 시작
    for (i = 0; i < a - 1; i++) n += month[i];   // 월수 더하기
    n %= 7;
    return week[n];
}

// solution(5, 24)
// https://school.programmers.co.kr/learn/courses/30/lessons/12901