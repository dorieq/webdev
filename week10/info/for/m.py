n = int(input())
cnt = 0
for i in range(1, n + 1):
    k = int(input())
    if k == 0:
        cnt = cnt + 1
print(cnt)