function solution(s, n) {
    var answer = '';
    for (i = 0; i < s.length; i++) {
        let unicode = s.charCodeAt(i);
        console.log(unicode)

        if (unicode === 32) {                            //공백이면 그대로
            answer += String.fromCharCode(unicode);
            continue;
        }
        else if ((unicode <= 90 && (unicode + n) > 90)      //영어 소문자인데 "z"를 넘었거나
            || (unicode >= 97 && (unicode + n) > 122)) {        //영어 대문자인데 "Z"를 넘었으면
            answer += String.fromCharCode(unicode + n - 26)     // 돌아간다
            continue;
        }
        else {
            answer += String.fromCharCode((unicode + n))        // 그 외는 그냥 +
        }
    }

    console.log(answer)

    return answer;
}

// 코드변환없이 알파벳을 문자열로 줘서 (예) var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// 답을 구하는 것도 가능하다
// https://school.programmers.co.kr/learn/courses/30/lessons/12926