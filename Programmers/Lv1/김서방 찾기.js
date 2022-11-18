function solution(seoul) {
    for(i=0; i<seoul.length; i++) {
        if(seoul[i] === "Kim") return `김서방은 ${i}에 있다`
    }
}

// indexOf('Kim')을 통해 idx 값을 구할 수도 있다.
// https://school.programmers.co.kr/learn/courses/30/lessons/12919
