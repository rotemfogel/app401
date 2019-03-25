#!/bin/bash
curl https://api.upstreamsecurity.io/api/v1/violations | jq .
sleep 2
curl -vv https://api.upstreamsecurity.io/api/v1/violations
