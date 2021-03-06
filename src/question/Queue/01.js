/**
 * @Question 232. 用栈实现队列
 * 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作
 * （push、pop、peek、empty）：
 * 实现 MyQueue 类：
 *      void push(int x) 将元素 x 推到队列的末尾
 *      int pop() 从队列的开头移除并返回元素
 *      int peek() 返回队列开头的元素
 *      boolean empty() 如果队列为空，返回 true ；否则，返回 false。
 * 
 * @tip
 * 输入：
 * ["MyQueue", "push", "push", "peek", "pop", "empty"]
 * [[], [1], [2], [], [], []]
 * 输出：
 * [null, null, null, 1, 1, false]
 */

 var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
 };
 
 /** 
  * @param {number} x
  * @return {void}
  */
 MyQueue.prototype.push = function(x) {
     this.inStack.push(x);
 };
 
 /**
  * @return {number}
  */
 MyQueue.prototype.pop = function() {
     //队列先进先出, 需要删除第一个
     if (!this.outStack.length) {
         while (this.inStack.length) {
             this.outStack.push(this.inStack.pop());
         }
     }
     return this.outStack.pop();
 };
 
 /**
  * @return {number}
  */
 MyQueue.prototype.peek = function() {
     if (!this.outStack.length) {
         while (this.inStack.length) {
             this.outStack.push(this.inStack.pop());
         }
     }
     return this.outStack[this.outStack.length - 1];
 };
 
 /**
  * @return {boolean}
  */
 MyQueue.prototype.empty = function() {
     return this.inStack.length == 0 && this.outStack.length == 0;
 };
 
 /**
  * Your MyQueue object will be instantiated and called as such:
  * var obj = new MyQueue()
  * obj.push(x)
  * var param_2 = obj.pop()
  * var param_3 = obj.peek()
  * var param_4 = obj.empty()
  */