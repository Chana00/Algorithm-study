function solution(s) {
    var answer = "";
    let arr = s.split(" ");
    for (i = 0; i < arr.length; i++) {
        let word = arr[i].split("");
        for (j = 0; j < word.length; j++) {
            if (j % 2 == 0)
                answer += word[j].toUpperCase();
            else
                answer += word[j].toLowerCase();
        }
        if (i != arr.length - 1) answer += " ";
    }
    return answer;
}

// 정규식, .map()함수 활용 등 더 간결하게 푸는 방법들이 있다.
// https://school.programmers.co.kr/learn/courses/30/lessons/12930