def pow(a, b):
    if b == 0:
        return 1
    elif b == 1:
        return a
    else:
        s = 1.0
        for i in range(0, b):
            s = s * a
        return s

a = float(input())
b = int(input())
print(pow(a, b))