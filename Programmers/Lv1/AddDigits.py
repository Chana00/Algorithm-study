#자릿수 더하기 (예) 123 -> 1+2+3 = 6
def solution(n):
    answer = 0
    for i in str(n):
        answer += int(i)

    print(answer)

    return answer


# 한 문장으로 압축 할 수 있다.
#return sum([int(i) for i in str(n)])