import requests 

url = 'http://localhost:8088/api/v1/violations'
print('HTTP GET [' + url + ']')
r = requests.get(url)
print('statusCode: ' + str(r.status_code))
print('body : ' + r.text)