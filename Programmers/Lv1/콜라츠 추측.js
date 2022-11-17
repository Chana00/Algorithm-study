function solution(num) {
    if (num == 1) return 0;         // 주어진 수가 1일 경우 0
    var answer = 0;

    while (num != 1) {               // num이 1이 될 때 까지 반복
        if (answer >= 500) return -1;    // 500번 이상 -> -1

        if (num % 2 == 0) num /= 2;
        else num = num * 3 + 1;

        answer++;
    }

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12943