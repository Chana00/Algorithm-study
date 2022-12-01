function solution(arr) {
    var answer = [];

    for (i = 0; i < arr.length; i++) {
        if (!(arr[i] === arr[i - 1])) answer.push(arr[i]);
    }

    return answer;
}

// answer에 arr[0]을 넣고 i를 1부터 시작하는게 더 확실하다
// https://school.programmers.co.kr/learn/courses/30/lessons/12906