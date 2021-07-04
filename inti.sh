#!/bin/sh
apk update
echo "🤖 开始安装[git]";
apk add git
echo "✅ [git]安装完成";

rm -rf JDTASK_V2P && rm -rf jd_scripts

echo "🤖 [gitclone]:JDHelloWorld/jd_scripts";
git clone https://ghproxy.com/https://github.com/JDHelloWorld/jd_scripts

git config pull.rebase false && git fetch https://ghproxy.com/https://github.com/CenBoMin/JDTASK_V2P && git pull origin main

echo "🤖 [gitclone]:CenBoMin/JDTASK_V2P";
git clone https://ghproxy.com/https://github.com/CenBoMin/JDTASK_V2P

git config pull.rebase false && git fetch https://ghproxy.com/https://github.com/JDHelloWorld/jd_scripts && git pull origin main

echo "✅ 恭喜！JDTASKV2P初始化完成 🎉 ";
