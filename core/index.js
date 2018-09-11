const axios = require('axios');

exports.bdTranslate = async (from = 'zh', to = 'en', words = '测试') => {
  const payload = {
    from,
    to,
    query: words,
  }
  const { data } = await axios({
    method: 'POST',
    url: 'https://fanyi.baidu.com/transapi',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    data: payload,
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
  });
  
  return data;
}