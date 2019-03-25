'use strict';

const request = require('request');
let url = 'https://api.upstreamsecurity.io/api/v1/violations';
if (process.argv.length > 2) {
	url = process.argv[2]
}
console.log('HTTP GET: [' + url + ']');
request(url, { json: true }, (err, res, body) => {
  if (err) { 
    return console.log(err); 
  }
  console.log('statusCode: ' + res.statusCode);
  console.log('body: ' + JSON.stringify(res.body));
});