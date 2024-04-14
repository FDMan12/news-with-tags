data = []


# Замена на работу с БД, функции тестировались для файла
# def read_data():
#     global data
#     data = []
#     file = open("data.txt", 'r')
#     lines = file.read().split('\n')
#     for i in lines:
#         line = i.split(' ')
#         if len(line) == 7:
#             data.append(line)
#
#
# def save_data():
#     global data
#     file = open("data.txt", 'w')
#     text = ""
#     for account_data in data:
#         line = account_data[0]
#         for i in range(1, len(account_data)):
#             line = line + " " + account_data[i]
#         text = text + line + '\n'
#     file.write(text)
#     file.close()

def save_data():
    pass


def add_data(account_data):
    global data
    if len(data) != 0:
        last_id = int(data[len(data) - 1][0])
        account_data.insert(0, str(last_id + 1))
    else:
        account_data.insert(0, str(1))
    data.append(account_data)
    save_data()


def delete_data(account_id):
    global data
    for account_data in data:
        if account_data[0] == str(account_id):
            account_index = data.index(account_data)
            data.pop(account_index)
            break
    save_data()


def read_account_data(account_id):
    global data
    for account_data in data:
        if account_data[0] == str(account_id):
            return account_data
    return False


def update_password(account_id, password):
    for account_data in data:
        if account_data[0] == str(account_id):
            account_data[5] = password
            save_data()
            return True
    return False


def update_access(account_id, level):
    for account_data in data:
        if account_data[0] == str(account_id):
            account_data[6] = level
            save_data()
            return True
    return False


def update_name(account_id, name, surname):
    for account_data in data:
        if account_data[0] == str(account_id):
            account_data[1] = name
            account_data[2] = surname
            save_data()
            return True
    return False
