function solution(arr) {
    var answer = [];
    let minIdx = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[minIdx] > arr[i])
            minIdx = i;
    }

    answer = [...arr];
    answer.splice(minIdx, 1);

    if (answer.length == 0) answer.push(-1);
    return answer;
}

// Math.min으로 arr의 최소값을 먼저 구하는 방법도 있다.
// https://school.programmers.co.kr/learn/courses/30/lessons/12935