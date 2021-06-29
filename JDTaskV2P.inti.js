// @grant require
// @grant nodejs
//============================
$message.loading("【 JDTASKV2P初始化 】", 25)
//============================
$message.loading("🤖 使用国内镜像下载Alpine Linux包管理工具apk", 3)

$exec("sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories", {
  cwd: 'script/JSFile',
  cb(data, error) {
    error ? console.error(error) : console.log(data)
  }
})

//下载inti.sh到script/JSFile
intiTask();
function intiTask() {
  for (let i = 0; i < 8; i++) {
    (function (i) {
      setTimeout(function () {
        if (i == 0) {
          $message.loading("⏳ 下载初始化文件:inti.sh", 2)
          $download('https://raw.githubusercontent.com/CenBoMin/JDTASK_V2P/main/inti.sh', {
            folder: './script/JSFile',
            name: 'inti.sh'
          }).then(d=> $message.success("✅  inti.sh已下载script/JSFile", 5)).catch(e=>console.error(e))
        }else if (i == 1) {
          $message.loading("⏳ 初始化任务准备安装中...", 5)
          $exec('chmod +x ./inti.sh', {
            cwd: 'script/JSFile',
            cb(data, error) {
              error ? console.error(error) : console.log(data)
            }
          })
        }else if (i == 2) {
          $message.loading("⏳ 开始安装...请稍等片刻", 5)
          $exec('./inti.sh', {
            cwd: 'script/JSFile',timeout: 0,
            cb(data, error) {
              error ? console.error(error) : console.log(data)
            }
          })
        }else if (i == 7) {
          $message.success("❗️请观察任务运行日志:JDTASKV2P初始化完成\n👉 点击消息可打开程序运行日志",{ secd: 0, url: `${__home}/logs/${__name}.log` })
        }
      },(i + 1) * 4000);
    })(i);
  }
}


//============================
//下载需要的环境变量文件：sendNotify.js && jdCookie.js && JS_USER_AGENTS.js &&
//https://raw.githubusercontent.com/JDHelloWorld/jd_scripts/main/JS_USER_AGENTS.js
//============================
