import math


def correct_page(page: int, rows_amount: int):
    max_page = math.ceil(rows_amount / 15)
    if page < 1:
        return 1
    elif page > max_page:
        return max_page
    else:
        return page


def cut_rows(rows: list, page: int):
    rows = rows[(0 + (page - 1) * 15):(15 + (page - 1) * 15)]
    return rows
