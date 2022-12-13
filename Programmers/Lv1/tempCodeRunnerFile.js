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
    let arr = [];
    let sum = 0;
    let set = new Set();

    for (i = 0; i < nums.length - 2; i++) {
        for (j = i + 1; j < nums.length - 1; j++) {
            for (k = i + 2; k < nums.length; k++) {
                if (nums[i] === nums[j] ||
                    nums[i] === nums[k] ||
                    nums[j] === nums[k]
                ) continue; // 중복 수가 있으면 pass

                arr = [];
                arr.push(nums[i]);
                arr.push(nums[j]);
                arr.push(nums[k]);
                arr.sort((a, b) => a - b);
                set.add(arr);
            }
        }
    }

    for (i = 0; i < set.size; i++) {
        set.forEach((a, b, set) => {
            if (isPrime(a[0] + a[1] + a[2])) answer++;
        })
    }

    // console.log(answer)
    return answer;
}