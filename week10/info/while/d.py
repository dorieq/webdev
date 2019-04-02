n = int(input())

i = 1
ok = True
while i <= n:
    if i == n:
        print("YES")
        ok = False
    i = i * 2  
if ok == True:
    print("NO")