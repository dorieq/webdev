import math

a = int(input())
cnt = 0
for i in range(2, math.floor(math.sqrt(a) + 1)):
    if a % i == 0:
        cnt = cnt + 2 - (i * i == a)

cnt = cnt + 2 - (a == 1)
print(cnt)