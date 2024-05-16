# forest
i = 0
j = 0

while i < 3:
    try:
        int(jermaine := input("enter an integer "))
        i = i + 3
    except ValueError:
        print("aight bruh you didn't type an integer")

print(j := 3)
