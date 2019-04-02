n = int(input())

l = [int(x) for x in input().split()]
cnt = 0
for i in range(0, n):
    if l[i] > 0:
        cnt = cnt + 1
print(cnt)