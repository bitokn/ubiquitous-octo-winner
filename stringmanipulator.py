def reverse_string(value: str) -> str:
    reversed_string = ""
    for i in range(len(value)):
        reversed_string += value[-(i + 1)]
    return reversed_string


def spaced_string(value: str) -> str:
    spaced_string = ""
    for char in value:
        spaced_string += f" {char}"
    return spaced_string


def main() -> None:
    joe = input("pls input str to be maniplulated ")
    print("reversed string %s " % reverse_string(joe))
    print("spaced out string %s " % spaced_string(joe))


if __name__ == "__main__":
    main()
