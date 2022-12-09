function solution(s) {
    let answer = [];
    let sRead = [];
    s = s.split("");

    for (i = 0; i < s.length; i++) {
        if (sRead.indexOf(s[i]) < 0) answer.push(-1);
        else answer.push(i - sRead.lastIndexOf(s[i]));

        sRead.push(s[i])
    }

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/142086
