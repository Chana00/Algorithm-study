# 약수의 합
# 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하기
# n은 0이상 3000이하

def solution(n):
    answer = n
    for i in range(1, n//2+1):
        if n % i == 0:
            answer += i
    return answer

#약수는 1부터 n의 절반, 그리고 n 본인이므로
# n을 먼저 더한 후에
# 1부터 n의 절반까지 for문을 돌려 나머지가 0인 값을 answer에 더했다.
#https://school.programmers.co.kr/learn/courses/30/lessons/12928