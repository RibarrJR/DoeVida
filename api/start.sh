#!/bin/sh

# go

clear

# config

PWD=`pwd`
cd "$PWD"

# log

log_debug="$PWD/log/debug.log"
log_forever="$PWD/log/forever.log"
log_output="$PWD/log/output.log"
log_error="$PWD/log/error.log"

# app


app="$PWD/app.js"

environment="production"

# start

# clear ; nodejs app.js --env ENVIRONMENT=localhost
# clear ; nodejs app.js --env ENVIRONMENT=production

ENVIRONMENT="$environment" forever start -l "$log_debug" -o "$log_output" -e "$log_error" -a "$app"

exit 0

ps -aux | grep app.js

pkill -f app.js
