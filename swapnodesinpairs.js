//Objective is to swap the nodes in a linked list in pairs

class Node {
    constructor(data, next = null) { //if next is not given, assume it is empty
      this.data = data
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)


//O(n) solution that iteratively swaps the nodes

let newNode = new Node(-1)
newNode.next = head
let temp = newNode
    
while (head && head.next) {
    let firstNode = head
    let secondNode = head.next 
        
    //n --> 2
    //1 --> 3
    //2 --> 1
    temp.next = secondNode
    firstNode.next = secondNode.next 
    secondNode.next = firstNode
        
    temp = firstNode
    head = firstNode.next
}
    
return newNode.next