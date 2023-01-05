function solution(s) {
  let res = [0, 0];
  let bin = s.split("");
  let oneNum = 0;
  let newBin;

while(newBin !== "1") {
  oneNum = 0;
  for (i = 0; i < bin.length; i++) {
      (bin[i] == "0") ? res[1]++ : oneNum++;
      newBin = oneNum.toString(2);
  }
  res[0]++;
  bin = newBin.split("");
  }
  
  return res;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/70129
