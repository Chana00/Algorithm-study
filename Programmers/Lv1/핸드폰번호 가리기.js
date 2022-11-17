function solution(phone_number) {
    var answer = phone_number.split("");
    for (i = 0; i < answer.length - 4; i++)
        answer[i] = "*";

    return answer.join("");
}

// 정규식으로 풀기, repeat와 slice 함수 사용하기 등 다양한 풀이방법이 있다.
// https://school.programmers.co.kr/learn/courses/30/lessons/12948