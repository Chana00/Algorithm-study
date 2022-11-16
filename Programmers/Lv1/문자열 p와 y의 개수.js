function solution(s) {
    var pNum = 0;
    var yNum = 0;
    for (const str of s.toLowerCase()) {
        if (str == 'p') pNum++;
        if (str == 'y') yNum++;
    }

    return (pNum === yNum) ? true : false;
}