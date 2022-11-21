function solution(price, money, count) {
    var answer = money;
    for (i = 1; i <= count; i++) {
        answer -= price * i;
    }

    if (answer < 0) {
        return -answer;
    }
    else return 0;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/82612?language=javascript