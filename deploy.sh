#!/bin/bash
set -e

git pull

# Front
pushd front
npm i
time tsc
npm run build:dev
popd

# Grunt
pushd grunt
npm i
grunt
popd

# Server
pushd server
npm i
time tsc
popd


