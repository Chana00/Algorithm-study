function solution(A, B) {
    let answer = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        answer += (A[i] * B[i]);
    }

    return answer;
}

solution([1, 4, 2], [5, 4, 4])

// A의 최솟값과 B의 최댓값을 차례대로 곱해서 누적한다.
// https://school.programmers.co.kr/learn/courses/30/lessons/12941?language=javascript