# a와 b의 내적
# a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1]  (n은 a, b의 길이)

def solution(a, b):
    answer = 0
    for i in range(0,len(a)):
        answer += a[i]*b[i]
    return answer


# https://school.programmers.co.kr/learn/courses/30/lessons/70128