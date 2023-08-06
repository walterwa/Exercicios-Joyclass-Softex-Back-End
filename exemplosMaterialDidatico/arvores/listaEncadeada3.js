const Node = function(value, next = null) {
    this.value = value,
    this.next = next
  }

  const LinkedList = function() {
    this.head = null;
    this.size = 0;
  }
  LinkedList.prototype.addNodeAtHead = function(value) {
    this.head = new Node(value, this.head);
    this.size++;
    return;
  }

  LinkedList.prototype.addNodeAtTail = function(value){
    let node = new Node(value); 
    if(!this.head) return this.addNodeAtHead(value);
    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    this.size++;
    return;
  }
  LinkedList.prototype.addNodeAt = function(value, index) {
    if(index > 0 && index > this.size) return console.log(`Index does not exist`);
    if(index === 0) return this.addNodeAtHead(value);
    const node = new Node(value);
    let current = this.head;
    let count = 0;
    let previous;
    while(count < index) {
     count++;
     previous = current;
     current = current.next
    }
    previous.next = node;
    node.next = current;
    this.size++;
    return;
 }
  
  const linked_list = new LinkedList();
  linked_list.addNodeAtHead(1);
  linked_list.addNodeAtHead(5);
  console.log(linked_list);
  linked_list.addNodeAt(10, 1);
  console.log(linked_list);
