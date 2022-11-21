function solution(arr1, arr2) {
    var answer = [];
    for (i = 0; i < arr1.length; i++) {
        answer[i] = [];
        for (j = 0; j < arr1[i].length; j++) {
            answer[i][j] = (arr1[i][j] + arr2[i][j]);
        }
    }
    return answer;
}

// answer[i] = []를 통해 정의되지 않은 인덱스들을 모두 초기화 해주어야 한다.
// https://school.programmers.co.kr/learn/courses/30/lessons/12950