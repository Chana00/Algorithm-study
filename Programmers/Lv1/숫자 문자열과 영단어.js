const engDic = {
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
}

function solution(s) {
    for (const word in engDic) {
        while (s.indexOf(word) >= 0)
            s = s.replace(word, engDic[word]);
    }

    return parseInt(s);
}

// solution("one4seveneight")
// https://school.programmers.co.kr/learn/courses/30/lessons/81301