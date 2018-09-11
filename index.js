const minimist = require('minimist');
const { bdTranslate } = require('./core');
const { isEng } = require('./util');
const { getHelp } = require('./cmds');

module.exports = async () => {
  const args = minimist(process.argv.slice(2));
  const word = args._[0];
  if (args.v || args.version) {
    console.log('fy-cli version: 0.0.1 - by: flasco');
  } else if (word == null || args.h || args.help) {
    // 显示帮助
    getHelp();
  } else {
    if (isEng(word)) {
      // 纯字母或者数字, 英文翻译中文
      const { data } = await bdTranslate('en', 'zh', word);
      console.log(data[0].dst);
    } else {
      // 中文翻译英文
      const { data } = await bdTranslate('zh', 'en', word);
      console.log(data[0].dst);
    }
  }
}