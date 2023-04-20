function Queue() {
  this.item = [];

  // 1、将元素加入队列中
  Queue.prototype.enqueue = (element) => {
    this.item.push(element);
  };
  // 2、移除队列的第一个元素，并返回被移除的元素
  Queue.prototype.dequeue = () => {
    return this.item.shift();
  };
  // 3、返回队列第一个元素
  Queue.prototype.front = () => {
    return this.item[0];
  };
  // 4、如果队列中不包含任何元素，返回true
  Queue.prototype.isEmpty = () => {
    return this.item?.length === 0;
  };
  //
  Queue.prototype.size = () => {
    return this.item?.length;
  };
  //
  Queue.prototype.toString = () => {
    let result = "";
    this.item.forEach((i) => {
      console.log(i);
      result = result + i;
    });
    return result;
  };
}
