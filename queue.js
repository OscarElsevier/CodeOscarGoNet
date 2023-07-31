module.exports = class Queue {
    constructor() {
        this.items = []
    }
    enqueue(item) {
        this.items.push(item);
        this.items = this.items.sort(
            (objA, objB) => Number(objA.created) - Number(objB.created),
          );
          this.items = this.items.sort(
            (objA, objB) => Number(objA.receiving) - Number(objB.receiving),
          );
    }
    dequeue() {
        this.items.shift();
    }
    peek() {
        return this.items[0]
    }
    print() {
        return this.items;
    }
    isEmpty(){
        return this.items.length == 0
    }
    count(){
        return this.items.length;
    }
    
}