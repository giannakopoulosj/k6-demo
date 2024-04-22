#!/bin/bash
docker run --rm -it -u "$(id -u):$(id -g)" -v "${PWD}:/xk6" grafana/xk6 build v0.43.1 \
  --with github.com/grafana/xk6-output-influxdb@v0.4.2