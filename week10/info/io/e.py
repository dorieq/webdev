a = int(input())
b = int(input())
result = 0
if a > 0:
    result = (a * b)
else:
    result = (-a * b) % 109
    result = 109 - result

print(result % 109)