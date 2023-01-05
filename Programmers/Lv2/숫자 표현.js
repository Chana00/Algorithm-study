function solution(n) {
  let answer = 0;
  let sum = 0;
  
  for(j = 1; j/2 <= n; j++) {
      sum = 0;
       for (i = j; i <= n; i++) {
        sum += i;
          if(sum == n) { 
              answer++;
              break;
          }
          else if(sum > n) break;
      
      }
  }
  
  return answer;
}

// n의 절반 이상부터 연속해서 더하는건 의미가 없으므로.. j/2까지
// https://school.programmers.co.kr/learn/courses/30/lessons/12924?language=javascript