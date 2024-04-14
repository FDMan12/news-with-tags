import random


def random_letter():
    return random.choice('abcdefghijklmnopqrstuvwxyz')


def random_element(rand_list: list):
    return rand_list[random.randint(0, len(rand_list) - 1)]


def random_string(length: int):
    result = ""
    for k in range(0, length):
        result += random_letter()
    return result


def random_big_letter():
    return random.choice('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
