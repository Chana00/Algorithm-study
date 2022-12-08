function solution(answers) {
    var answer = [];
    let count = 0;

    const stu1 = Array(answers.length).fill().map((arr, i) => {
        return (i % 5) + 1;
    });


    const stu2 = Array(answers.length).fill().map((arr, i) => {
        if (i % 2 === 0) return 2;
        else if (i % 2 === 1) {
            if (count >= 5) count = 0;

            count++;
            if (count === 2) count++;
            return count;
        }
    });

    const stu3Patten = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const stu3 = Array(answers.length).fill().map((arr, i) => {
        return stu3Patten[i % 10]
    });

    let score = [0, 0, 0];
    for (i = 0; i < answers.length; i++) {
        if (stu1[i] === answers[i]) score[0]++;
        if (stu2[i] === answers[i]) score[1]++;
        if (stu3[i] === answers[i]) score[2]++;
    }

    let maxScore = score[0];
    answer.push(1)
    for (i = 1; i < score.length; i++) {
        if (maxScore < score[i]) {
            answer = [];
            answer.push(i + 1);
            maxScore = score[i];
        }
        else if (maxScore == score[i]) answer.push(i + 1);
    }

    return answer;
}

// solution([2, 3, 4, 2, 1])
// fill과 map을 사용하지 않아도 간단하게 score 카운트까지 가능하다
// Math.max 함수를 응용할 수 있다.
// https://school.programmers.co.kr/learn/courses/30/lessons/42840