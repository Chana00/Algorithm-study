# 당첨인지 모르는 번호가 있을 때 최대최소 당첨순위 구하기

def rank(num):
    if 7-num > 6 :
        return 6
    else :
        return 7-num

def solution(lottos, win_nums):
    answer = []
    zero, num = 0, 0
    for l in lottos:
        if l == 0:      # 숫자를 모를 경우
            zero += 1    # 맞았을 때 당첨숫자 +1
            continue
        
        for w in win_nums:
            if l == w:
                num += 1
    
    answer.append(rank(zero+num))
    answer.append(rank(num))
            
    return answer

# 생각보다 오래걸렸다 ( 첫 시도때 잘못된 로직을 짜서 결과오류 반복 )
# https://school.programmers.co.kr/learn/courses/30/lessons/77484