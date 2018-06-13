/**
 * 2. 实现一个最简单的模板引擎
 *
 render('我是{{name}}，年龄{{age}}，性别{{sex}}',{
	name:'姓名',
	age:18
})

 结果： 我是姓名，年龄18，性别undefined。
 */

/**
 * Tips: replace()
 *       正则表达式
 */

var show = render('我是{{name}},再强调一遍我是{{name}}，年龄{{age}}，性别{{sex}}',{
    name:'王师傅',
    age:18
})
console.log(show)
/**
 * 我的答案
 */

// function render(template, data) {
//     const name = data.name
//     const age = data.age
//     const sex = data.sex
//
//     template = template
//         .replace(/{{name}}/g, name)
//         .replace(/{{age}}/g, age)
//         .replace(/{{sex}}/g, sex)
//
//     console.log(template)
//     return template
// }

/**
 * 参考答案:
 * 优点：没有写死，同时修改data和模板仍然可以工作
 */
function render(tpl, data) {
    return tpl.replace(/\{\{(.+?)\}\}/g, function (m, m1) {
        // m为正则匹配的值，m1为第一个括号中匹配的值
        return data[m1]
    })
}


