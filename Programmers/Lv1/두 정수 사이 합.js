function solution(a, b) {
    var answer = 0;
    if(a>b) while(a >= b) {
        answer += b;
        b++;
    }
    else while(a <= b) {
        answer += a;
        a++
    }
    
    return answer;
}

// 삼항연산자를 쓰는 방법, Math함수를 쓰는 방법도 있더라
// https://school.programmers.co.kr/learn/courses/30/lessons/12912