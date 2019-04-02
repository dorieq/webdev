n = int(input())

l = [int(x) for x in input().split()]
cnt = 0
ok = False
for i in range(0, n - 1):
    if l[i] > 0 and l[i + 1] > 0 or l[i] < 0 and l[i + 1] < 0:
        ok = True
if ok == True:
    print("YES")
else:
     print("NO")