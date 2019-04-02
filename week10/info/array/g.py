n = int(input())

l = [int(x) for x in input().split()]
l.reverse()
for i in range(0, n):
    print(l[i], end = ' ')