/**
 * 1) 单链表的插入、删除、查找操作
 * 2) 链表中存储的是int类型的数据
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  // 根据value查找节点
  findByValue(item) {
    let currentNode = this.head.next;
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next;
    }

    console.log('log=>currentNode', currentNode);
    return currentNode === null ? -1 : currentNode;
  }

  // 根据index查找节点，下标从0开始
  findByIndex(index) {
    let currentNode = this.head.next;
    let pos = 0;

    while (currentNode !== null && pos !== index) {
      currentNode = this.head.next;
      pos++;
    }

    console.log('log=>currentNode', currentNode);
    return currentNode === null ? -1 : currentNode;
  }

  // 向链接末尾追加节点
  append(newElement) {
    const newNode = new Node(newElement);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  // 在指定元素后插入节点
  insert(newElement, element) {
    const currentNode = this.findByValue(element);
    if (currentNode !== -1) {
      console.log('log=>', '未找到插入位置');
      return;
    }

    const newNode = new Node(newElement);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  // 根据值查找前一个节点
  findPrev(item) {
    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
      return -1;
    }

    return currentNode;
  }

  // 根据值删除节点
  remove(item) {
    const prevNode = this.findByValue(item);
    if (prevNode === -1) {
      console.log('log=>', '未找到元素');
      return;
    }
    prevNode.next = prevNode.next.next;
  }

  display() {
    let currentNode = this.head.next; // 忽略头指针的值
    while (currentNode !== null) {
      console.log('log=>current node element:', currentNode.element);
      currentNode = currentNode.next;
    }
  }
}
