class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  
    insert = (item) => {
      const current = new Node(this.value, this.next);
      this.value = item;
      this.next = current;
      return this;
    };
  
    size = () => {
      let count = 0;
      let curr = this;
      while (curr !== null) {
        curr = curr.next;
        count++;
      }
      return count;
    };
  
    InsertList = (item) => {
      const mustadd = new Node(item);
      let curr = this;
      while (curr.next !== null) {
        curr = curr.next;
        curr.next = mustadd;
        return this;
      }
    };
    at = (num) => {
      let curr = this;
      for (let index = 0; index < num; index++) {
        curr = curr.next;
      }
      return curr;
    };
  
    join = (seperator) => {
      let result = `${this.value}`;
      let curr = this;
      while (curr.next !== null) {
        curr = curr.next;
        result += seperator + `${curr.value}`;
      }
      return result;
    };
  
    map = (fn) => {
      let curr = this;
      let newHead = new Node(fn(curr.value));
      let newCurr = newHead;
  
      curr = curr.next;
      while (curr !== null) {
        newCurr.next = new Node(fn(curr.value));
        newCurr = newCurr.next;
        curr = curr.next;
      }
      return newHead;
    };
  
    filter = (fn) => {
      let curr = this;
      let newNode = null;
      let newCurr = null;
      while (curr !== null) {
        if (fn(curr.value)) {
          if (newNode === null) {
            newNode = new Node(curr.value);
            newCurr = newNode;
          } else {
            newCurr.next = new Node(curr.value);
            newCurr = newCurr.next;
          }
        }
        curr = curr.next;
      }
      return newNode;
    };
  
    find = (fn) => {
      let curr = this;
      let newNode = null;
      let newCurr;
      while (curr !== null) {
        if (fn(curr.value)) {
          newNode = new Node(curr.value);
          newCurr = newNode;
        }
        curr = curr.next;
      }
  
      return newNode;
    };
  }
  
  const test = new Node(3, new Node(8));
  // console.log(test)
  // console.log(test.insert(17))
  // console.log(test.InsertList(9))
  // console.log(test.at())
  // console.log(test.size())
  // console.log(test.filter(x => x%2 === 0))
  // console.log(test.map(x => x**2))
  // console.log(test.find(x => x===3))
  
