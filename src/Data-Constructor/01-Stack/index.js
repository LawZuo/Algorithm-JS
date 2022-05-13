/*
    封装Stack类
*/
class Stack {
    constructor() {
        this.dataStore = [];
        this.count = 0;
    };

    /*
        方法实现
    */
    // === 1.1: push() 压栈 === >
    push(element) {
        this.dataStore[this.count] = element;
        this.count++;
    };
    // === 1.2: pop() 弹栈 === >
    pop() {
        if (this.count == 0) {
            return "栈空，不能删除元素";
        };
        this.count--;
        let element = this.dataStore[this.count];
        delete this.dataStore[this.count];
        return element;
    };
    // === 1.3: peek() 查栈顶 === >
    peek() {
        if (this.count == 0) {
            return undefined;
        };
        return this.dataStore[this.count - 1];
    };
    // === 1.4: isEmpty() 判断栈 ===>
    isEmpty() {
        return this.count === 0;
    };
    // === 1.5: clear() 清空栈 ===>
    clear() {
        this.count = 0;
        this.dataStore = [];
    };
    // === 1.6: size() 检索栈 ===>
    size() {
        return this.count;
    };
};

//测试
let stack = new Stack();
stack.push('law');
stack.push('dan');
stack.push('paul');
console.log("压栈", stack);

//进制转换
function mulBase(num, base) {
    let stack = new Stack();
    do {
        stack.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    let result = "";  //创建一个字符串用来保存结果
    while (!stack.isEmpty()) {
        result += stack.pop();
    };
    return result;
};
var s = mulBase(32, 2);
console.log("进制转换", s);
