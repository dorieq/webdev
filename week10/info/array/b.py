n = int(input())

l = [int(x) for x in input().split()]

for i in range(0, n):
    if l[i] % 2 == 0:
        print(l[i])