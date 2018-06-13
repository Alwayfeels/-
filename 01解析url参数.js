/**
 * 1. 尽可能全面正确的解析一个任意url的所有参数为Object。
 *
 var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&id=789&city=%E5%8C%97%E4%BA%AC&d&enabled=false';
 parseParam(url);

 结果：
 {
    user: 'anonymous',
    id: [123, 456], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
    city: '北京', // 中文
    enabled: true, // 未指定值的 key 约定值为 true
 }
 */

/**
 * Tips:  decodeURI(url)能将url中的编码字符串解码
 *        split()
 */

var url = 'http://www.domain.com/?user=anonymous&id=123&id=456&id=789&city=%E5%8C%97%E4%BA%AC&d&enabled=false';
parseParam(url);

function parseParam(url) {
    const urlStr = decodeURI(url.split('?')[1])
    const urlObj = {}
    const idNum = urlStr.split('id=').length - 1
    const idArr = []
    for (let i = 1; i <= idNum; i++) {
        idArr.push(parseInt(urlStr.split('id=')[i].split('&')[0]))
    }
    // 添加属性
    urlObj.user = urlStr.split('user=')[1].split('&')[0]
    urlObj.id = idArr
    urlObj.city = urlStr.split('city=')[1].split('&')[0]
    urlObj.enabled = urlStr.split('enabled=').length > 1
        ? urlStr.split('enabled=')[1].split('&')[0]
        : true

    console.log(urlObj)
    return urlObj
}