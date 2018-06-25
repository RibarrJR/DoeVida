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

# start

# clear ; forever start -c "http-server" ./
# /data/www/doevida.org/spa

forever start -l "$log_debug" -o "$log_output" -e "$log_error" -c "http-server -a doevida.org -p 80"  "/data/www/doevida.org/spa"

exit 0

