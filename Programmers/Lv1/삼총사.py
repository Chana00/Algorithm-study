# 리스트의 세개 값을 더했을 때 0이면 삼총사
def solution(number):
    answer = 0
    for a in range(0, len(number)):
        for b in range(a+1, len(number)):
            for c in range (b+1, len(number)):
                if number[a] + number[b] + number[c] == 0: 
                    answer += 1
    
    return answer

# 3중 for문으로 풀었지만
# python의 라이브러리 중 combinations 을 사용하면 간단하게 풀 수 있는 것 같다.
# combinations : https://ourcstory.tistory.com/414

# https://school.programmers.co.kr/learn/courses/30/lessons/131705