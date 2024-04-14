import matplotlib
from matplotlib import pyplot as plt

from utils.database.utils.relation_worker import RelationWorker

matplotlib.use('Agg')


def to_default_graph(relation_worker: RelationWorker, x_name, y_name):
    x = relation_worker.get_column(x_name)
    y = relation_worker.get_column(y_name)
    plt.plot(x, y)
    plt.savefig(f'static/images/{relation_worker.name}.png', format='png')
    plt.clf()


def to_count_graph(relation_worker: RelationWorker, name):
    y = relation_worker.get_column(name)
    y.sort()
    values = {}
    for value in y:
        if values.get(value, 0) == 0:
            values[value] = 1
        else:
            values[value] += 1
    x = []
    y = []
    for key, value in values.items():
        x.append(key)
        y.append(value)

    plt.plot(x, y)
    plt.xlabel(f"Количество одинаковых для столбца \"{name}\"")
    plt.ylabel(name)
    plt.savefig(f'static/images/{relation_worker.name}.png', format='png')
    plt.clf()
