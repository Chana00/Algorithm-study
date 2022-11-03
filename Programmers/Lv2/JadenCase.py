#JadenCase

def solution(s):
    answer = list(map(str, s))
    i = 0
    while i < len(s):
        if i == 0 or answer[i-1] == " ":
            answer[i] = answer[i].upper()
        else:
            answer[i] = answer[i].lower()
        i+= 1

    return "".join(answer)

#처음엔 split으로 쪼개어 각 단어마다 .capitalize()를 해주었으나 공백 개수의 문제 때문에 절반은 fail