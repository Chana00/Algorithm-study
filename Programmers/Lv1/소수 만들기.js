function isPrime(n) {
    if (n < 2) return false;
    for (l = 2; l * l <= n; l++) {
        if (n % l === 0) {
            return false;
        }
    }
    return true;
}

function solution(nums) {
    let answer = 0;
    let sum = 0;

    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            for (k = j + 1; k < nums.length; k++) {
                sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) answer++;
            }
        }
    }

    return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/12977