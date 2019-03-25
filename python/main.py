import requests 

r = requests.get('http://localhost:8088/api/v1/violations')
print('statusCode: ' + str(r.status_code))
print('body : ' + r.text)