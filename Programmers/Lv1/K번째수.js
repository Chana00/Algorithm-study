function solution(array, commands) {
    var answer = [];
    commands.map(cmd => {
        let res = array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => a - b);
        answer.push(res[cmd[2] - 1])
    })
    console.log(answer)
    return answer;
}