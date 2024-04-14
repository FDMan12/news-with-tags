import sqlite3

from utils.database.models.relation import Relation
from utils.database.models.tuple_models.headertuple import HeaderTuple


class RelationWorker:
    def __init__(self, name: str, tuple_template: HeaderTuple):
        self.GET_ALL_TABLES = "SELECT name FROM sqlite_master WHERE type='table';"
        self.connection = sqlite3.connect('dir_data.db')
        self.cursor = self.connection.cursor()

        self.name = name
        self.tuple_template = tuple_template
        self.relation = Relation(name, tuple_template)
        self.relationClone = Relation(f"{name}Clone", tuple_template)
        if self.relation.name not in self.get_tables():
            self.create()
        if self.relationClone.name not in self.get_tables():
            self.create_clone()
            execute_sql = self.relation.clone_into_relation(self.relationClone.name)
            self.cursor.execute(execute_sql)
        self.connection.commit()

    def create(self):
        execute_sql = self.relation.create()
        self.cursor.execute(execute_sql)
        self.connection.commit()

    def create_clone(self):
        execute_sql = self.relationClone.create()
        self.cursor.execute(execute_sql)
        self.connection.commit()

    def close(self):
        self.connection.close()

    def get_columns(self):
        execute_sql = self.relation.get_columns()
        self.cursor.execute(execute_sql)
        columns_info = self.cursor.fetchall()
        self.connection.commit()
        return [column[1] for column in columns_info]

    def get_rows(self):
        execute_sql = self.relationClone.get_rows()
        self.cursor.execute(execute_sql)
        rows = self.cursor.fetchall()
        self.connection.commit()
        return rows

    def get_tables(self):
        self.cursor.execute(self.GET_ALL_TABLES)
        tables = self.cursor.fetchall()
        self.connection.commit()
        return [i[0] for i in tables]

    def drop_tables(self):
        self.cursor.execute(self.GET_ALL_TABLES)
        tables = self.cursor.fetchall()

        for table in tables:
            table_name = table[0]
            if table_name != "sqlite_sequence":
                self.cursor.execute(f"DROP TABLE {table_name};")
        self.connection.commit()

    def clear_rows(self):
        execute_sql = self.relationClone.clear_relation()
        self.cursor.execute(execute_sql)
        self.connection.commit()
        self.cursor.execute('VACUUM;')
        self.connection.commit()

    def add(self, values: list):
        values.pop(self.tuple_template.primary_key_index())
        execute_sql = self.relationClone.add_tuple(values)
        self.cursor.execute(execute_sql, tuple(values))
        self.connection.commit()

    def delete(self, name: str, value):
        execute_sql = self.relationClone.remove_tuple(name, value)
        self.cursor.execute(execute_sql, (value,))
        self.connection.commit()

    def update(self, values: list, check_value, check_name="id"):
        values.pop(self.tuple_template.primary_key_index())
        execute_sql = self.relationClone.change_tuple(check_name, check_value, values)
        tuple_values = values
        tuple_values.append(check_value)
        tuple_values = tuple(tuple_values)
        self.cursor.execute(execute_sql, tuple_values)
        self.connection.commit()

    def update_value(self, name: str, prev_value, new_value):
        execute_sql = self.relationClone.change_value(name, prev_value, new_value)
        self.cursor.execute(execute_sql, (new_value, prev_value))
        self.connection.commit()

    def get_with_value(self, name, value):
        execute_sql = self.relationClone.get_tuple(name, value)
        self.cursor.execute(execute_sql, (value,))
        tables = self.cursor.fetchall()
        self.connection.commit()
        return [i for i in tables]

    def roll_back(self):
        execute_sql = self.relationClone.delete_relation()
        self.cursor.execute(execute_sql)
        self.connection.commit()
        execute_sql = self.relationClone.create()
        self.cursor.execute(execute_sql)
        self.connection.commit()
        execute_sql = self.relation.clone_into_relation(self.relationClone.name)
        self.cursor.execute(execute_sql)
        self.connection.commit()

    def save(self):
        execute_sql = self.relation.delete_relation()
        self.cursor.execute(execute_sql)
        self.connection.commit()
        execute_sql = self.relation.create()
        self.cursor.execute(execute_sql)
        self.connection.commit()
        execute_sql = self.relationClone.clone_into_relation(self.relation.name)
        self.cursor.execute(execute_sql)
        self.connection.commit()

    def print_stats(self):
        print(self.relation.name)
        execute_sql = self.relationClone.count_value("id")
        print(execute_sql)
        self.cursor.execute(execute_sql)
        countC = self.cursor.fetchone()[0]
        execute_sql = self.relation.count_value("id")
        print(execute_sql)
        self.cursor.execute(execute_sql)
        count = self.cursor.fetchone()[0]
        print(count, countC)
        self.connection.commit()

    def avg(self, name):
        execute_sql = self.relationClone.avg_value(name)
        self.cursor.execute(execute_sql)
        return self.cursor.fetchone()[0]

    def sum(self, name):
        execute_sql = self.relationClone.sum_value(name)
        self.cursor.execute(execute_sql)
        return self.cursor.fetchone()[0]

    def count(self, name):
        execute_sql = self.relationClone.count_value(name)
        self.cursor.execute(execute_sql)
        return self.cursor.fetchone()[0]

    def get_column(self, name):
        execute_sql = self.relationClone.get_column(name)
        self.cursor.execute(execute_sql)
        self.connection.commit()
        return [i[0] for i in self.cursor.fetchall()]

    def order_by(self, name):
        execute_sql = self.relationClone.order_by(name)
        self.cursor.execute(execute_sql)
        rows = self.cursor.fetchall()
        self.connection.commit()
        return rows

    def order_with(self, check_name, check_value, order_name):
        execute_sql = self.relationClone.order_with(check_name, order_name)
        self.cursor.execute(execute_sql, (check_value, ))
        rows = self.cursor.fetchall()
        self.connection.commit()
        return rows

    def __del__(self):
        self.close()
