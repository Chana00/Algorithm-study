
// function solution(participant, completion) {
//     completion.forEach(e => {
//         let index = participant.indexOf(e);
//         if (index > -1) participant.splice(index, 1);
//         else return participant[index]
//     })

//     return participant.pop();
// }

// 1) 정확성에선 100% 였지만 효율성에서 0%

function solution(participant, completion) {
    participant.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)
    completion.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)
    for (i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i])
            return participant[i];
    }
}

// https://school.programmers.co.kr/learn/courses/30/lessons/42576