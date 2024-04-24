from database.utils.relation_worker import RelationWorker


def select_func(relation: RelationWorker, param: dict, func_name):
    functions = {
        'create': lambda: relation.add(param.get("values")),
        'update': lambda: relation.update(param.get("values"), param.get("check_value"), param.get("check_name")),
        'delete': lambda: relation.delete(param.get("check_name"), param.get("check_value")),
        'sort_by': lambda: relation.order_by(param.get("name")),
        'sort_with': lambda: relation.order_with(param.get("check_name"), param.get("check_value"), param.get("name")),
        'get_with': lambda: relation.get_with_value(param.get("check_name"), param.get("check_value")),
    }

    selected_function = functions.get(func_name)
    if selected_function:
        result = selected_function()
        if func_name in ['sort_by', 'sort_with', 'get_with']:
            return result
    else:
        raise Exception("Function error: function name does not exist")
