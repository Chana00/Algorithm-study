function solution(n) {
  let ans = 0;
  let M1 = 1;  //F(1)
  let M2 = 0; //F(0)
  for(i = 2; i<=n; i++) {
      ans = (M1 + M2) % 1234567;
      M2 = M1;
      M1 = ans ;
  }
  return ans;
}

// 7번 케이스부터 오류가나서 힌트를 보니.. 너무 큰 수여서 실패가 떴다.
// --> 계산 과정에서 미리 나누어주면 오버플로우가 날 일이 없다!
// https://school.programmers.co.kr/learn/courses/30/lessons/12945