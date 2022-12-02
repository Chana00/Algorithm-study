function solution(strings, n) {
    return strings.sort((a, b) => {
        aChar = a.charAt(n);
        bChar = b.charAt(n);

        if (aChar > bChar) return 1;
        else if (aChar < bChar) return -1;
        else if (aChar === bChar) return (a > b) ? 1 : -1;
    });
}

// localeCompare() 라는 함수가 있더라..
// charAt 안쓰고 그냥 a[n] 해도 되는 모양
// https://school.programmers.co.kr/learn/courses/30/lessons/12915