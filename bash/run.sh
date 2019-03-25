#!/bin/bash
curl http://localhost:8088/api/v1/violations | jq .
sleep 2
curl -vv http://localhost:8088/api/v1/violations
