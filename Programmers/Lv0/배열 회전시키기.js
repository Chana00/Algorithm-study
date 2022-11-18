function solution(numbers, direction) {
    let num;
    if (direction === "left") {
        num = numbers.shift();
        numbers.push(num);
    }
    else if (direction == "right") {
        num = numbers.pop();
        numbers.unshift(num);
    }
    return numbers;
}

// 변수 선언 없이도 리턴이 가능하다고 한다.
// https://school.programmers.co.kr/learn/courses/30/lessons/120844