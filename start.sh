#!/bin/sh

cd "/data/www/doevida.org/api/log" ;
rm -rfv *.log

cd "/data/www/doevida.org/api" ;
bash "/data/www/doevida.org/api/start.sh" ;

cd "/data/www/doevida.org/spa/log" ;
rm -rfv *.log

cd "/data/www/doevida.org/spa" ;
bash "/data/www/doevida.org/spa/start.sh" ;

forever list

