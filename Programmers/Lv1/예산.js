function solution(d, budget) {
    d.sort((a, b) => a - b);
    var answer = 0;
    for (i = 0; i < d.length; i++) {
        if (budget - d[i] < 0) break;
        budget -= d[i];
        answer++;
        console.log(budget)
    }
    return answer;
}

// 다른 방법도 있는데 그냥 for문 - break가 계산이 제일 빠를 것이다 (아마도!)
//https://school.programmers.co.kr/learn/courses/30/lessons/12982