import time
from alive_progress import alive_bar

total = 10
with alive_bar(total) as bar:
    for etapa in range(total):
        print(etapa)
        bar()
        time.sleep(1)