/**
 * 有一个全局变量 a，有一个全局函数 b，实现一个方法bindData，执行后，a的任何赋值都会触发b的执行。
 var a = 1;
 function b(){
	console.log('a的值发生改变');
 }
 bindData();
 a = 2; // 此时输出 a的值发生改变
 */

var a = 1;
function b() {
    console.log('a的值发生改变')
}
bindData(a, b)
a = 2

/**
 *  live中的题目和答案不匹配，编者也没想出实现方法
 */
function bindData(target, event) {
    console.log(Object.prototype)
    console.log(`target = ${target}`);
    console.log(`event = ${event}`);
    for (let key in event) {
        console.log(target.hasOwnProperty(key));
        if (target.hasOwnProperty(key)) {
            (function () {
                var v = target[key];
                Object.defineProperty(target, key, {
                    get: function () { return v; },
                    set: function (_value) {
                        v = _value;
                        event.call(this)
                    }
                })
            })()
        }
    }
}