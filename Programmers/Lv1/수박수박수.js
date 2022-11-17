function solution(n) {
    var answer = '';
    for (i = 0; i < n; i++) i % 2 == 0 ? answer += "수" : answer += "박";
    return answer;
}

//"수박" 을 repeat() 주는 방법도 있다.
// https://school.programmers.co.kr/learn/courses/30/lessons/12922