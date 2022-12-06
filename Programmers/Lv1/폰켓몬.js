function solution(nums) {
    var answer = 0;
    var maxNum = Math.floor(nums.length / 2)
    var selectPonkemon = [];

    for (i = 0; i < nums.length; i++) {
        if (answer >= maxNum) break;
        if (selectPonkemon.indexOf(nums[i]) === -1) {
            selectPonkemon.push(nums[i])
            answer++;
        }
    }
    return answer;
}

// map, filter, set 등을 사용하면 훨씬 줄일 수 있는 것 같다...
// https://school.programmers.co.kr/learn/courses/30/lessons/1845