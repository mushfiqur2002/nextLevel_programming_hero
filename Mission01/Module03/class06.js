class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

const node = new Node(10);
node.next = new Node(20);
node.next.next = new Node(30);

console.log(node);

let temp = node;
while(temp !== null){
    console.log(temp.value);
    temp = temp.next;;
}
