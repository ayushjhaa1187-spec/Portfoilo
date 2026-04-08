import requests
import time

url = "http://localhost:3000"
timeout = 30
start_time = time.time()

while time.time() - start_time < timeout:
    try:
        response = requests.get(url)
        if response.status_code == 200:
            print("Server is up and running!")
            exit(0)
    except requests.ConnectionError:
        pass
    time.sleep(1)

print("Timeout: Server did not start within {} seconds.".format(timeout))
exit(1)
