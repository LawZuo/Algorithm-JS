### Stack —— 栈

##### 1.1 —— Stack的简述

> 栈是一种遵从`后进先出` 原则的有序集合；( LIFO :  last of first out)
>
> 新添加或待删除的元素都保存在栈的同一端，称为`栈顶` ，另一端称为`栈底` ；
>
> 对栈的两种主要操作是压栈push，弹栈pop，对栈内元素的添加和删除操作

##### 1.2 ——Stack的方法

>`  push(element)`：	压栈，添加新元素到栈顶；
>
>`  pop()`：	弹栈，移除栈顶的元素，并返回被移除的元素；
>
>`peek()`:	查栈顶，返回栈顶的元素；
>
>`isEmpty()`:	判断栈，栈内有元素返回true，栈空返回false；
>
>`clear()`:	清空栈，移除栈内所有元素；
>
>` size() `:	检索栈，返回栈内元素的个数；

##### 1.3 —— Stack的实现

- 使用数组实现栈

```javascript
function Stack() {
    this.dataStore = []; //创建一个存放元素的栈
    this.count = 0; //记录栈的大小
};
```

- push(element)	压栈:

>a. 数组的索引总是从0开始的，而定义栈的长度是从1开始的，所以在count的位置就能添加新元素（count = dataStore.index + 1）；[ index表示数组的索引值 ]
>
>b. 添加元素后，栈的长度要加1；

``` javascript
push(element) {
    this.dataStore[this.count] = element;
    this.count++;
};
//简化写法: 先在count为位置添加元素；count的值再加1，指向下一个位置;
this.dataStore[this.count++] = element;
```

- pop()	弹栈

> a. 先判断栈是否为空，栈内没元素则不能进行删除操作，直接返回出去；
>
> b. 栈不为空，先将count的值减1，使count的值等于数组的索引，就能通过count的值拿到数组最后一个元素；
>
> c. 此时 count = dataStore.length，count指向的就是栈顶的元素；
>
> d. 根据count值删除对应的元素；并返回删除的元素；
>
> e. 此时 count = dataStore.index + 1; [ index表示数组的索引值 ]

``` javascript
pop() {
    if (this.count == 0) {
        return "栈空，不能删除元素";
    };
    this.count--;
    let element = this.dataStore[this.count];
    delete this.dataStore[this.count];
    return element;
};
//简化写法：count的值先减1，再删除对应的元素，并返回该元素
return this.dataStore[--this.count];
```

- peek()	查栈顶

> a. 先判断栈是否为空，栈为空返回undefined；不为空继续操作；
>
> b.  count的值等于数组索引值加1； 所以先将count减1后，再但会该count值对应的元素
>
> c. count = dataStore.index + 1;

``` javascript
peek() {
    if (this.count == 0) {
        return undefined;
    }
    return this.dataStore[this.count-1];
}
```

- isEmpty()	判断栈

> a. 判断栈是否为空，仅需判断栈的大小是否为0；如果为0，则返回true；

``` javascript
isEmpty() {
    return this.count === 0;
}
```

- clear()	清空栈

> a. 清空栈仅需重置栈的元素，重置栈的大小;

```javascript
clear() {
    this.count = 0;
    this.dataStore = [];
}
```

- size()	检索栈

> a. 检索栈内有多少元素，仅需返回dataStore的长度，或count的大小;

``` javascript
size() {
    return this.count;
};
//或者返回数组的长度 
return this.dataStore.length;
```







