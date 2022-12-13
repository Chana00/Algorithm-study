function solution(a, b, n) {
    var answer = 0;
    let emptyBottle = 0;
    let newBottle = 0;

    while (n >= a) {
        newBottle = Math.floor(n / a) * b;  // n개의 병을 주고 새 병을 받아온다
        emptyBottle = n % a;        // 주고 남은 병수
        answer += newBottle;        // 정답 더하기
        n = newBottle + emptyBottle;    // 새병을 모두 마시고 + 남은 병수 합친다
    }

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/132267