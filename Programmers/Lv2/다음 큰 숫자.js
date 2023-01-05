function solution(n) {
  let nBin = n.toString(2).split("").filter(e => e === "1").length;
  
  while(true){
      n++;
      let ansBin = n.toString(2).split("").filter(e => e === "1").length;
      if(nBin === ansBin) break;
  }
  
  return n;
}
// 간신히 효율성 테스트까지 넘긴 코드인 느낌?

function solution2(n) {
  let nBin = n.toString(2).split("1").length;
  
  while(true){
      n++;
      let ansBin = n.toString(2).split("1").length;
      if(nBin === ansBin) break;
  }
  
  return n;
}

// 위 코드가 훨씬 좋은 효율성을 보여준다
// https://school.programmers.co.kr/learn/courses/30/lessons/12911

