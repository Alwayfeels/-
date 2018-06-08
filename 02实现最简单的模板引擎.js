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
 */

render('我是{{name}}，年龄{{age}}，性别{{sex}}',{
    name:'姓名',
    age:18
})

function render(template, data) {
    const name = data.name
    const age = data.age
    const sex = data.sex

    template = template
        .replace(/{{name}}/, name)
        .replace(/{{age}}/, age)
        .replace(/{{sex}}/, sex)

    console.log(template)
    return template
}

