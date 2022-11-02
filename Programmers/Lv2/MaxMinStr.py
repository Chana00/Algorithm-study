def solution(s):
    answer = ''
    arr = s.split()
    arr = list(map(int, arr))
    
    min, max = arr[0], arr[0]
    for i in arr:
        if min > i:
            min = i
        elif max < i :
            max = i
    
    answer = str(min)+ " "+ str(max)
    return answer