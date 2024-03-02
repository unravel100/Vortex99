//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owner v card
global.ytname = "YT: WHITE444 YT" //ur yt chanel name
global.socialm = "GitHub: Wota777FF" //ur github or insta name
global.location = "Mena, Morocco, Casablanca" //ur location

//new
global.botname = 'Vortex-99' //ur bot name
global.ownernumber = '918360234087' //ur owner number
global.ownername = 'ＷㅤＨㅤＩㅤＴㅤＥㅤ４ㅤ４ㅤ４    ?    ?' //ur owner name
global.websitex = "https://youtu.com/@WHITE444_YT"
global.wagc = "https://whatsapp.com/channel/0029VaSFe9J7oQhb9v6nqC2G"
global.themeemoji = '🐰'
global.wm = "ＷㅤＨㅤＩㅤＴㅤＥㅤ４ㅤ４ㅤ４  ?  ?"
global.botscript = 'https://github.com/Wota777FF/Vortex99' //script link
global.packname = "Powered by"
global.author = "Vortex 99"
global.creator = "918360234087@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["918360234087"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v4' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '234' //set autoblock country code
global.antiforeignnumber = '234' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: '*Limit Exceeded*',
	nsfw: '*Nsfw Disabled, Ask admin to enable.*',
    done: '*Succeed*',
    error: 'Error',
    success: 'ㅤ'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
