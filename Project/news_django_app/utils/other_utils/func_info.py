import asyncio
import time


def time_info(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        func(*args, **kwargs)
        end_time = time.time()
        execution_time = end_time - start_time
        print(f"Execution time: {execution_time:.{4}f} seconds, {(execution_time / 60):.{4}f} minutes,"
              f" {(execution_time / 3600):.{4}f} hours")

    return wrapper


def async_run_func(func):
    def wrapper(*args, **kwargs):
        asyncio.run(func(*args, **kwargs))

    return wrapper


def result_info(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        print(result)
        return result

    return wrapper



