import os.path

from utils.database.models.tuple_models.attribute_modificators import Types, Modifiers


def check_type(type_name: str):
    return type_name in [i.name for i in Types]


def check_modifier(modifier_name: str):
    return modifier_name in [i.value for i in Modifiers]


def check_value_type(value, type_name):
    is_file = (type_name == "BLOB" and os.path.isfile(value))
    is_type_correct = (type(value) in [i.value for i in Types if i.name == type_name][0])
    return is_file or is_type_correct


class TupleException(Exception):
    pass


class Attribute:
    def __init__(self, name, type_name, modifiers=[]):
        self.name = name
        self.type_name = type_name
        self.modifiers = modifiers

    def toList(self):
        attribute_list = [self.name, self.type_name]
        attribute_list.extend(self.modifiers)
        return attribute_list


class HeaderTuple:
    def __init__(self):
        self.__attributes = [Attribute("id", "INTEGER", ["PRIMARY KEY", "AUTOINCREMENT", "UNIQUE", "NOT NULL"])]

    def add_attribute(self, name: str, type_name: str, stats=[]):
        if not all([name != attribute.name for attribute in self.__attributes]):
            raise TupleException(f'Name error: {name} already exists.')
        if check_type(type_name):
            stats_import = []
            stats_import.extend([i for i in stats if check_modifier(i)])
            self.__attributes.append(Attribute(f"[{name}]", type_name, stats_import))
        else:
            raise TupleException('Type error: incorrect type.')
        return self

    def is_value_correct(self, value, name: str):
        type_name = next((i.type_name for i in self.__attributes if i.name in [f"[{name}]", name]), "")
        if type_name != "":
            return check_value_type(value, type_name)
        return False

    def is_name_correct(self, name: str):
        return f"[{name}]" in [i.name for i in self.__attributes] or name in [i.name for i in self.__attributes]

    def is_check_pair_correct(self, check_name: str, check_value):
        return self.is_name_correct(check_name) and self.is_value_correct(check_value, check_name)

    def is_values_correct(self, values: list):
        types = [i.type_name for i in self.__attributes if "PRIMARY KEY" not in i.modifiers]
        if len(values) == len(types):
            values_correct_list = []
            for type_name, value in zip(types, values):
                values_correct_list.append(check_value_type(value, type_name))
            return all(values_correct_list)
        return False

    def primary_key_index(self):
        for index, attr in enumerate(self.__attributes):
            if "PRIMARY KEY" in attr.modifiers:
                return index
        return None

    def add_foreign_key(self, name: str, stats: list, table_name: str, table_key: str):
        if not all([name != attribute.name for attribute in self.__attributes]):
            raise TupleException(f'Name error: {name} already exists.')
        stats_import = [f"REFERENCES {table_name} ({table_key})"]
        stats_import.extend([i for i in set(stats) if check_modifier(i)])
        self.__attributes.append(Attribute(f"[{name}]", "INTEGER", stats_import))
        return self

    def add_primary_key(self, name: str, stats: list):
        if not all([name != attribute.name for attribute in self.__attributes]):
            raise TupleException(f'Name error: {name} already exists.')
        if all(["PRIMARY KEY" != attribute.modifiers[0] for attribute in self.__attributes]):
            stats_import = ["PRIMARY KEY"]
            stats_import.extend([i for i in set(stats) if check_modifier(i)])
            self.__attributes.append(Attribute(name, "INTEGER", stats_import))
        else:
            raise TupleException("Error: primary key already exists.")
        return self

    def del_attribute(self, name: str):
        [self.__attributes.remove(i) for i in self.__attributes if name == i.name]

    def get(self):
        return [i.toList() for i in self.__attributes]

    @property
    def attributes(self):
        return self.__attributes

