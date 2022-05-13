/**
 * @Queue 队列
 */
class Queue {
    constructor() {
        this.count = 0;     //记录队列的大小
        this.lowestCount = 0;   //追踪第一个元素
        this.items = {};    //存储队列元素的容器
    }

    /**
     * @enqueue 向队列尾部添加元素
     * @param 要传入的参数
     */
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    };
    
    /**
     * @dequeue 移除队列的第一项，并返回被移除的元素
     * @return 返回被移除的元素
     */
    dequeue() {
        //越界判断 队列中是否包含元素 调用isEmpty方法
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };

    /**
     * @peek 返回队列中第一元素，不做操作，仅检索队列头部元素
     * @return 返回头部元素
     */
    peek() {
        if (this.isEmpty()) {
            return undefined;
        };
        return this.items[this.lowestCount];
    };

    /**
     * @isEmpty 检索队列是否为空，items为空返回true;
     * @return Boolean
     */
    isEmpty() {
        return this.size() === 0;
    };

    /**
     * @size 返回队列包含的元素个数
     * @return Number
     */
    size() {
        return this.count - this.lowestCount;
    };

    /**
     * @clear 清空队列
     */
    clear() {
       this.items = {};
       this.count = 0;
       this.lowestCount = 0; 
    }

    /**
     * @toString 
     */
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        let objString =  `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        };
        return objString;
    }
}
const queue = new Queue();
console.log(queue);

queue.enqueue("law");
queue.enqueue("paul");
queue.dequeue();
console.log(queue.toString());
console.log(queue.isEmpty());