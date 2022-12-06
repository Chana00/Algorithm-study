function solution(numbers) {
    var answer = [];

    for (i = 0; i < numbers.length - 1; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            if (answer.indexOf(sum) === -1) answer.push(sum);
        }
    }

    answer.sort((a, b) => a - b)
    return answer;
}

// solution([2, 1, 3, 4, 1])
// https://school.programmers.co.kr/learn/courses/30/lessons/68644