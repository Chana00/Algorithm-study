//하샤드 수

function solution(x) {
    var sum = 0;
    for(const n of x.toString().split("")) sum += parseInt(n);

    if ((x/sum) % 1 === 0 ) return true;
    else return false; 
}

// 함수를 많이 쓰면 속도가 떨어진다
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

