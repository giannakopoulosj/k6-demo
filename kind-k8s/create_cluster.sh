#!/bin/bash

kind create cluster --config=kind.config.yaml
bash install_kustomize_metrics.sh