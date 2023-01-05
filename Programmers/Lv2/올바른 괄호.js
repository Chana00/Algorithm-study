function solution(s) {
    let arr = s.split("");
    let n = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "(") n++;
        else if (arr[i] == ")") {
            if (n <= 0) return false;
            n--;
        }
    }

    return n === 0 ? true : false;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12909
