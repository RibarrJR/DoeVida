#!/bin/sh

# go

clear

# nodejs / npm #

yum install -y nodejs
yum install -y npm

# link - compatible all apps
ln -s /usr/bin/node /usr/bin/nodejs

# npm

nodejs -v
npm -v

npm list

# config

PWD=`pwd`
cd "$PWD"

# clear

rm -rfv "$PWD/node_modules"

# modules -> excentials

npm install -g forever
npm install -g pm2

# modules -> goods

npm install express
npm install express-load

npm install mongoose

npm install ejs

# modules -> local

npm install compression
npm install body-parser

npm install nodemailer

#
