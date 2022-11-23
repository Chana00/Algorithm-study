function solution(n) {
    var answer = n.toString(3);

    //뒤집기
    answer = (answer + "").split("").reverse().join("");
    answer = parseInt(answer, 3);
    return answer;
}

function sol2(n) {
    var answer = 0;
    var res = [];

    //3진법 구하기
    while (n > 0) {
        res.push(n % 3);
        n = Math.floor(n / 3);
    }

    answer = res.join("");
    answer = parseInt(answer, 3);
    return answer;
}

// answer = n.toString(3) 하면 끝인줄 몰랐다 ㅡ.ㅡ
// https://school.programmers.co.kr/learn/courses/30/lessons/68935