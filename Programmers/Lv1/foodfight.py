# 푸드 파이트 대회

def solution(food):
    answer = ""
    answerRe = ""
    for i in range(1,len(food)):
        for j in range(0,food[i]//2):
            answer += str(i)

    answer = answer + "0" + answer[::-1]
    return answer

# https://school.programmers.co.kr/learn/courses/30/lessons/134240