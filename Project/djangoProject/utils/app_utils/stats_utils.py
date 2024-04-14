from utils.database.utils.relation_graph import to_count_graph


def get_stats(relation):
    stats = {"количество записей": relation.count("id")}
    if relation.name == "houses":
        stats["среднее значение цены"] = relation.avg("Цена")
        stats["сумма цен"] = relation.sum("Цена")
        to_count_graph(relation, "Цена")
    return stats

