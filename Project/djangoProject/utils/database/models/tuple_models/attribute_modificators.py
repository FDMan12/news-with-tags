from enum import Enum


class Types(Enum):
    BLOB = [str, int, bool]
    DATE = [str, int]
    INTEGER = [int]
    NUMERIC = [int, bool]
    REAL = [float]
    TEXT = [str]


class Modifiers(Enum):
    UNIQUE = "UNIQUE"
    NOT_NULL = "NOT NULL"
    AUTOINCREMENT = "AUTOINCREMENT"
