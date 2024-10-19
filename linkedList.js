class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }

    add(data) {
        const node = new Node(data);
        if(this.head === null) {
            this.head = node;
            this.size++;
        }
        else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr = node;
            this.size++;
        }
    }
}

const linkList = new LinkedList();
linkList.add(32);
linkList.add(43);
console.log(linkList);