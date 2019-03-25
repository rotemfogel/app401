import requests 

r = requests.get('https://api.upstreamsecurity.io/api/v1/violations')
print('statusCode: ' + str(r.status_code))
print('body : ' + r.text)