#!/bin/sh
echo "🤖 开始安装[inti-Module]";
npm install request
npm install ws
npm install qrcode-terminal
npm install http-server
npm install axios
npm install ts-node
echo "✅ [inti-Module]安装完成";

echo "🤖 开始安装[Node-Module]";
npm install png-js
npm install got
npm install tunnel
npm install crypto-js
npm install download
npm install tough-cookie
npm install date-fns
npm install http
npm install stream
npm install zlib
npm install vm
npm install fs
echo "✅ [Node-Module]安装完成";

echo "🤖 开始更新[NPM]";
npm update
npm upgrade
npm audit fix
echo "✅ [Node-Module]安装完成";
echo "✅ 恭喜！JDTASKV2P模块安装完成,PM2重启elecV2P 🎉 ";
echo "\n\n🤖 pm2 restart elecV2P...";
