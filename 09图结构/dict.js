// 创建字典的构造函数
function Dictionary() {
  this.items = {};

  // 在字典里添加键值对
  Dictionary.prototype.set = function (key, value) {
    this.items[key] = value;
  };
  // 判断字典中是否含有某个key
  Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key);
  };
  // 从字典中移除元素
  Dictionary.prototype.remove = function (key) {
    if (!this.has(key)) return false;
    delete this.items[key];
    return true;
  };
  // 根据key去取value
  Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined;
  };
  // 获取所有的keys
  Dictionary.prototype.keys = function () {
    return Object.keys(this.items);
  };
  // 获取所有的keys
  Dictionary.prototype.values = function () {
    return Object.values(this.items);
  };
  // size
  Dictionary.prototype.values = function () {
    return this.keys().length;
  };
  // 清楚
  Dictionary.prototype.values = function () {
    this.items = {};
  };
}
