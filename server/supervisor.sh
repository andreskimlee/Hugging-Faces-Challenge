#!/bin/bash
SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"

supervisor -w $SCRIPTPATH/dist/ $SCRIPTPATH/dist/server.js
