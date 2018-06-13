/**
 * 3. 将一个任意长的数字变成逗号分割的格式
 *
 1234.56 => "1,234.56" , 123456789 => "123,456,789"

 parseToMoney(1234.56) // return "1,234.56"
 */

/**
 * Tips: string.split()
 *       array.reverse()
 *       array.join()
 */

/**
 * 我的答案
 */

var show = parseToMoney(1234567)
console.log(show);

// function parseToMoney(number) {
//     var intPart = number.toString().split('.')[0]
//     var floatPart = number.toString().split('.')[1]
//     var arr = intPart.split('').reverse()
//     var newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 3 === 0 && i !== 0) {
//             newArr.push(',')
//             newArr.push(arr[i])
//         } else {
//             newArr.push(arr[i])
//         }
//     }
//     var moneyStr = newArr.reverse().join('').concat('.'+floatPart)
//
//     console.log(moneyStr)
//     return moneyStr
// }

/**
 * 参考答案(使用正则)
 */

function parseToMoney(number) {
    if (number.toString().split('.').length > 1) {
        var intPart = number.toString().split('.')[0].replace(/(\d+?)(?=(\d{3})+$)/g, '$1,')
        var floatPart = number.toString().split('.')[1]
        return `${intPart}.${floatPart}`
    }
    return number.toString().replace(/(\d+?)(?=(\d{3})+$)/g, '$1,')
}


/**
 * 附加题：一行代码将下列string中的余额提取出来
 * var string = "我的账户余额：2,235,467.20"
 */

/**
 * 参考答案
 */
var string = "我的账户余额：2,235,467.20"
var data = Number(string.replace(/[^0-9.]/g,''))
console.log(data)

