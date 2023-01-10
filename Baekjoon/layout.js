const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(input) // 확인 후 지우기

// 백준에서 JS를 풀기위한 코드 레이아웃
// \r은 무시해도 된다.
