from utils.database.models.tuple_models.headertuple import HeaderTuple
import re


class RelationException(Exception):
    pass


def check_col_name(name):
    return bool(re.match("^[a-zA-Zа-яА-Я0-9_\\s,:]*$", name))


class Relation:
    def __init__(self, name: str, tuple_template: HeaderTuple):
        if check_col_name(name):
            self.name = name
            self.tuple_template = tuple_template
        else:
            raise RelationException('Name error: incorrect name.')

    def create(self):
        sql_string = ",\n".join([" ".join(item) for item in self.tuple_template.get()])
        return f'CREATE TABLE IF NOT EXISTS {self.name} (\n{sql_string}\n);\n'

    def add_tuple(self, values: list):
        if self.tuple_template.is_values_correct(values):
            question_marks = ", ".join(["?" for _ in values])
            attribute_names = ", ".join(
                [i.name for i in self.tuple_template.attributes if "PRIMARY KEY" not in i.modifiers])
            return f"INSERT INTO {self.name} ({attribute_names}) VALUES ({question_marks});\n"
        else:
            raise RelationException('Values error: incorrect values.')

    def remove_tuple(self, name, value):
        if self.tuple_template.is_value_correct(value, name) and check_col_name(name):
            return f"DELETE FROM {self.name} WHERE [{name}] = ?;\n"
        else:
            raise RelationException('Value error: incorrect value.')

    def change_value(self, name, prev_value, new_value):
        if self.tuple_template.is_value_correct(prev_value, name) \
                and self.tuple_template.is_value_correct(new_value, name) and check_col_name(name):
            return f"UPDATE {self.name} SET [{name}] = ? WHERE [{name}] = ?;\n"
        else:
            raise RelationException('Values error: incorrect value.')

    def change_tuple(self, check_name, check_value, values: list):
        names = [i.name for i in self.tuple_template.attributes if "PRIMARY KEY" not in i.modifiers]
        if self.tuple_template.is_values_correct(values) \
                and self.tuple_template.is_value_correct(check_value, check_name) \
                and len(values) == len(names) and check_col_name(check_name):
            change_values = []
            for name in names:
                change_values.append(f"{name} = ?")
            change_values_string = ", ".join(change_values)
            return f"UPDATE {self.name} SET {change_values_string} WHERE [{check_name}] = ?;\n"
        else:
            raise RelationException('Values error: incorrect values.')

    def get_tuple(self, name, value):
        if self.tuple_template.is_value_correct(value, name) and check_col_name(name):
            return f"SELECT * FROM {self.name} WHERE [{name}] = ?;\n"
        else:
            raise RelationException('Value error: incorrect value.')

    def clear_relation(self):
        return f"DELETE FROM {self.name};\n"

    def delete_relation(self):
        return f"DROP TABLE {self.name};\n"

    def get_rows(self):
        return f"SELECT * FROM {self.name};\n"

    def clone_into_relation(self, cloneable_name: str):
        names = [i.name for i in self.tuple_template.attributes if "PRIMARY KEY" not in i.modifiers]
        names_string = ", ".join(names)
        return f"INSERT INTO {cloneable_name} ({names_string}) " \
               f"SELECT {names_string} FROM {self.name};\n"

    def avg_value(self, name: str):
        if check_col_name(name):
            return f"SELECT AVG({name}) AS average FROM {self.name};\n"
        else:
            raise RelationException('Name error: incorrect name.')

    def sum_value(self, name: str):
        if check_col_name(name):
            return f"SELECT SUM({name}) AS sum FROM {self.name};\n"
        else:
            raise RelationException('Name error: incorrect name.')

    def count_value(self, name: str):
        if check_col_name(name):
            return f"SELECT COUNT({name}) AS count FROM {self.name};\n"
        else:
            raise RelationException('Name error: incorrect name.')

    def get_columns(self):
        return f"PRAGMA table_info({self.name})"

    def get_column(self, name):
        if check_col_name(name):
            return f"SELECT [{name}] FROM {self.name}"
        else:
            raise RelationException('Name error: incorrect name.')

    def order_by(self, name: str):
        if check_col_name(name):
            return f"SELECT * FROM [{self.name}] ORDER BY [{name}]"
        else:
            raise RelationException('Name error: incorrect name.')

    def order_with(self, checkable_name: str, order_name: str):
        if check_col_name(order_name) and check_col_name(checkable_name):
            return f"SELECT * FROM {self.name} WHERE [{checkable_name}] = ? ORDER BY [{order_name}]"
        else:
            raise RelationException('Name error: incorrect name.')
