def _xor(a, b):
    if a == b:
        return 0
    else:
        return 1

a = int(input())
b = int(input())
print(_xor(a, b))