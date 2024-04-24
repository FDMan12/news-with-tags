import re


def is_number(value: str):
    return value.isdigit()


def is_name(value: str):
    return re.match("^([A-Z][a-z]*)|([А-Я][а-я]*)$", value)


def is_date(value: str):
    return re.match("^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}$", value)
