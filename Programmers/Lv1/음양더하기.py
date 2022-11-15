# 음양 더하기
def solution(absolutes, signs):
    answer = 0
    for i in range(0,len(absolutes)):
        if signs[i]:
            answer += absolutes[i]
        elif not signs[i]:
            answer -= absolutes[i]
            
    return answer

# zip()을 이용하여 for문을 돌리는 방법도 있다.
# https://school.programmers.co.kr/learn/courses/30/lessons/76501