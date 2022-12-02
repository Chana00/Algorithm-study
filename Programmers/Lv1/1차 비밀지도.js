function solution(n, arr1, arr2) {
    var answer = [];
    let arr1ToBin = arr1.map(p => p.toString(2).padStart(n, "0"));
    let arr2ToBin = arr2.map(p => p.toString(2).padStart(n, "0"));

    for (i = 0; i < n; i++) {
        let arr1BinStr = arr1ToBin[i].split("");
        let arr2BinStr = arr2ToBin[i].split("");
        let res = "";
        for (j = 0; j < n; j++) {
            if (arr1BinStr[j] == "1" || arr2BinStr[j] == "1") res += "#";
            else res += " ";
        }
        answer.push(res);
    }

    console.log(answer);
    return answer;
}

// 정규식과 replace를 사용하면 더 짧게도 가능한 것 같다.
// https://school.programmers.co.kr/learn/courses/30/lessons/17681