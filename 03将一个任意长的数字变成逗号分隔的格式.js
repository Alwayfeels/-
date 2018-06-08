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

parseToMoney(1234567.56)

function parseToMoney(number) {
    var intPart = number.toString().split('.')[0]
    var floatPart = number.toString().split('.')[1]
    var arr = intPart.split('').reverse()
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            newArr.push(',')
            newArr.push(arr[i])
        } else {
            newArr.push(arr[i])
        }
    }
    var moneyStr = newArr.reverse().join('').concat('.'+floatPart)

    console.log(moneyStr)
    return moneyStr
}